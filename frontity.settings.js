import { config } from "dotenv";
config();

const settings = {
  "name": "sirinsoftware-frontity",
  "state": {
    "frontity": {
      "adminUrl": process.env.ADMIN_URL,
      "url": process.env.SITE_URL,
      "title": "Sirinsoftware",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": {},
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://admin.sirinsoftware.com/wp-json",
          "homepage": '/home',
          "postsPage": '/blog',
          params: {
            per_page: 10,
            type: ["post", "page", "teammembers", "portfolio"]
          },
          postTypes: [
            {
              type: "teammembers", // type slug
              endpoint: "teammembers", // REST API endpoint
              archive: "/teammembers" // link where this custom posts are listed
            },
            {
              type: "portfolio", // type slug
              endpoint: "portfolio", // REST API endpoint
              archive: "/case-studies" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "portfolio_cat",
              endpoint: "portfolio_cat",
              postTypeEndpoint: "portfolio",
            },
            {
              taxonomy: "teammembers_cat",
              endpoint: "teammembers_cat",
              postTypeEndpoint: "teammembers",
            },
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
