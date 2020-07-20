/* eslint-disable no-param-reassign */ 
import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import axios from 'axios';
import Theme from './components';
import imageUrl from './processors/imageUrl';
import linkUrls from './processors/linkUrls';
import { linkReplace, linkImageReplace } from './utils/func';

const newHandler = {
  name: 'categoryOrPostType',
  priority: 19,
  pattern: '/:type/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    // 1. try with category.
    try {
      let hand_name = 'category';
      if(params.type==="case-studies-cat") hand_name = 'case-studies-cat';
      const category = libraries.source.handlers.find(
        (handler) => handler.name === hand_name,
      );
      await category.func({
        route, params, state, libraries,
      });
    } catch (e) {
      let hand_name = 'post type';
      if(params.type==="case-studies") hand_name = 'portfolio';
      // It's not a category
      const postType = libraries.source.handlers.find(
        (handler) => handler.name === hand_name,
      );
      await postType.func({
        link: route, params, state, libraries,
      });
    }
  },
};

const caseHandler = {
  name: 'CaseStudies',
  priority: 19,
  pattern: 'caseHandler',
  func: async ({
    route, params, state, libraries,
  }) => {
    const postsResponse = await libraries.source.api.get({
      endpoint: "portfolio",
      params: { per_page: "9999", _embed: true }
    });
    const items = await libraries.source.populate({
      response: postsResponse,
      state,
    });
    state.theme.cases = items;
  },
};

const marsTheme = {
  name: '@frontity/mars-theme',
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    customSettings: {
      pageNumber: 2,
      urlsWithLocal: {},
      categories: {},
      isSubscribeSend: false,
      isFormSend: false,
      isCommentSend: false,
      sendFormGuide: false,
      isThanksOpen: true,
      blogLoadMore: false,
    },
    theme: {
      menu: {},
      cases: {},
      teammembers: {},
      recaptchaToken: null,
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      alternativeUrlForImage: ({ state }) => () => {
        const urls = {
          urlFrom : state.frontity.adminUrl,
          urlTo : state.frontity.url,
          isLocal : state.frontity.isLocal,
        }
        state.customSettings.urlsWithLocal = urls;
      },
      setRecaptchaToken: ({ state }) => (token) => {
        state.theme.recaptchaToken = token;
      },
      loadMore: ({ state }) => async () => {
        state.customSettings.pageNumber += 1;
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      changeFormSend: ({ state }) => {
        state.customSettings.isFormSend = !state.customSettings.isFormSend;
      },
      changeFormGuide: ({ state }) => {
        state.customSettings.sendFormGuide = !state.customSettings.sendFormGuide;
      },
      sendForm: ({ state }) => async (data) => {
        const dataForm = data.formData;
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        await axios.post(
          `${state.source.api}/frontity-api/send-form`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {
          state.customSettings.isFormSend = true;
          console.log(response);
        });
      },
      sendFormGuide: ({ state }) => async (data) => {
        console.log(state);
        const dataForm = data;
        console.log(state.theme.recaptchaToken);
        console.log(dataForm);
        console.log(data);
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        await axios.post(
          `${state.source.api}/frontity-api/sendbookdata`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {
          console.log(response);
        });

        state.customSettings.sendFormGuide = true;
      },
      sendComment: ({ state }) => async (data) => {
        const dataForm = data.formData;
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        state.customSettings.isCommentSend = true;
        await axios.post(
          `${state.source.api}/frontity-api/send-comment`,
          dataForm,
          {headers: {'content-type': 'application/json'}},
        ).then((response) => {
          console.log(response);
          if (response.status === 200) {
            state.customSettings.isCommentSend = false;
          }
        });
      },

      sendSubscribe: ({ state }) => async (data) => {
        const dataForm = data.formData;
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        await axios.post(
          `${state.source.api}/frontity-api/send-subscribe`,
          dataForm,
          {headers: {'content-type': 'application/json'}},
        ).then((response) => {
          if (response.status === 200) {
            state.customSettings.isSubscribeSend = true;
          }
        });
      },
      beforeSSR: async ({ route, state, actions, libraries }) => {

        actions.theme.alternativeUrlForImage();

        const optionPage = await axios.get(`${state.source.api}/acf/v3/options/options`);
        state.options = optionPage.data;

        const categories = await axios.get(`${state.source.api}/wp/v2/categories`);
        state.customSettings.categories = categories.data;

        await actions.source.fetch('/about/faq');

        if (state.router.link.includes('/services/')) {
          await actions.source.fetch('/case-studies/');
        }

        if (
          state.router.link.includes('/case-studies/')
          && state.router.link !== '/case-studies/'
        ) {
          await actions.source.fetch('/case-studies/');
        }
        if (
          state.router.link === '/'
        ) {
          await actions.source.fetch('/case-studies/');
        }

        if (state.router.link === '/case-studies/') {
          await actions.source.fetch("caseHandler");
        }

        if (state.router.link === '/teammembers/') {
          const teammembersResponse = await libraries.source.api.get({
            endpoint: "teammembers",
            params: { per_page: "9999", _embed: true }
          });
          const teammembersItems = await libraries.source.populate({
            state,
            response: teammembersResponse
          });

          state.theme.teammembers = teammembersItems;
        }

        if (
          !state.router.link.indexOf('/blog/')
          && state.router.link !== '/blog/'
        ) {
          await actions.source.fetch('/blog');
        }

        const { urlCheck } = libraries.func;
        const replaces = [state.frontity.url, state.frontity.adminUrl];
        const mainMenu = await axios.get(`${state.source.api}/menus/v1/menus/100`);
        state.theme.menu.main = mainMenu.data || {};
        state.theme.menu.main.items.map((item) => {
          item.urlFrontity = urlCheck(item.url, replaces);
          if (item.child_items) {
            item.child_items = item.child_items.map((cItem) => {
              cItem.urlFrontity = urlCheck(cItem.url, replaces);
              return cItem;
            });
          }
          return item;
        });

        const footerData = await axios.get(`${state.source.api}/menus/v1/menus/4`);
        state.theme.menu.footer_menu = footerData.data;
      },
    },
  },
  libraries: {
    func: {
      urlCheck: linkReplace,
      imageUrlCheck: linkImageReplace,
    },
    source: {
      handlers: [newHandler, caseHandler],
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe, imageUrl, linkUrls],
    },
  },
};

export default marsTheme;
