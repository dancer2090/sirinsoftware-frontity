import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import React from 'react';
import axios from 'axios';

const newHandler = {
  name: "categoryOrPostType",
  priority: 19,
  pattern: "/(.*)?/:slug", 
  func: async ({ route, params, state, libraries }) => {
    // 1. try with category.
    try {
      const category = libraries.source.handlers.find(
        handler => handler.name == "category"
      );
      await category.func({ route, params, state, libraries });
    } catch (e) {
      // It's not a category
      const postType = libraries.source.handlers.find(
        handler => handler.name == "post type"
      );
      await postType.func({ link: route, params, state, libraries });
    }
  }
};

const marsTheme = {
  name: "@frontity/mars-theme",
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
      pageNumber : 1,
      categories: {},
    },
    theme: {
      menu: [],
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
      init: ({ libraries }) => {

      },
      loadMore: ({ state, actions }) => async (data) => {
        state.seatbackapi.pageNumber += 1;
        actions.source.fetch(`posts/${state.customSettings.pageNumber}`, {
          force: true,
        });
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        const optionPage = await axios.get(`${state.source.api}/acf/v3/options/options`);
        state.options = optionPage.data;
        if(!state.router.link.indexOf("/blog/")){
          const categories = await axios.get(`${state.source.api}/wp/v2/categories`);
          state.customSettings.categories = categories.data;
        }
        if (
          !state.router.link.indexOf("/blog/") &&
          state.router.link !== "/blog/"
        ) {
          await actions.source.fetch("/blog");
        }

      },
    },
  },
  libraries: {
    source: {
      handlers: [newHandler]
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
  },
};

export default marsTheme;
