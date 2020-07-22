/* eslint-disable no-undef */
/* eslint-disable quote-props */
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

const teamHandler = {
  name: 'teamHandler',
  priority: 19,
  pattern: 'teamHandler',
  func: async ({
    route, params, state, libraries,
  }) => {
    const teammembersResponse = await libraries.source.api.get({
      endpoint: "teammembers",
      params: { per_page: "9999", _embed: true }
    });
    const teammembersItems = await libraries.source.populate({
      state,
      response: teammembersResponse
    });

    state.theme.teammembers = teammembersItems;
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
      faq: {},
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
      changeSubscribeSend: ({ state }) => {
        state.customSettings.isSubscribeSend = !state.customSettings.isSubscribeSend;
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
          gtag('event', 'Send Email from footer form', {
            'event_category': 'Send Email from footer form',
          });
          if (__insp) {
            __insp.push(['identify', dataForm.get('email')]);
            __insp.push(['tagSession', {
              email: dataForm.get('email'),
              name: dataForm.get('name'),
              company: dataForm.get('company'),
            }]);
          }
        });
      },
      sendFormGuide: ({ state }) => async (data) => {
        const dataForm = data;
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        await axios.post(
          `${state.source.api}/frontity-api/sendbookdata`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {

        });

        state.customSettings.sendFormGuide = true;
      },
      sendComment: ({ state }) => async (data) => {
        const dataForm = data.formData;
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        state.customSettings.isCommentSend = true;
        await axios.post(
          `${state.source.api}/frontity-api/send-comment`,
          dataForm,
          {headers: {'content-type': 'application/json'}},
        ).then((response) => {
          if (response.status === 200) {
            state.customSettings.isCommentSend = false;
          }
        });
      },

      sendSubscribe: ({ state }) => async (data) => {
        const dataForm = data;
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
      beforeSSR: async ({ state, actions, libraries }) => {
        
        let seconds = 0;
        const timer = setInterval(() => {
          seconds = seconds + 100;
        }, 100);

        const globalOptions = await axios.get(`${state.source.api}/frontity-api/get-options`);
        const footerData = { items : globalOptions.data.footer_menu || {} };
        const optionPage =  { acf : globalOptions.data.options || {} };
        const mainMenu = { items : globalOptions.data.head_menu || {} };

        state.theme.menu.footer_menu = footerData;

        actions.theme.alternativeUrlForImage();

        state.options = optionPage;

        state.theme.faq = globalOptions.data.faq.categories || {};

        const categories = await axios.get(`${state.source.api}/wp/v2/categories`);
        state.customSettings.categories = categories.data;

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
          await actions.source.fetch("teamHandler");
        }

        if (
          !state.router.link.indexOf('/blog/')
          && state.router.link !== '/blog/'
        ) {
          await actions.source.fetch('/blog');
        }

        const { urlCheck } = libraries.func;
        const replaces = [state.frontity.url, state.frontity.adminUrl];
        state.theme.menu.main = mainMenu || {};
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


        clearInterval(timer);
        //console.log(seconds);
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
