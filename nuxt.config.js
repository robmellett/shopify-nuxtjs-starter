const env = require("dotenv").config();
import ShopifyService from "./services/ShopifyService";

export default {
  mode: "universal",

  router: {
    middleware: "checkout"
  },

  generate: {
    fallback: true,
    routes: [],
    interval: 100
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/checkout" }, { src: "~/plugins/filters" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "cookie-universal-nuxt",
    "nuxt-shopify",
    "~/modules/shopify"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  shopify: {
    domain: process.env.SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    unoptimized: true // If you need to access Shopify Pages, otherwise set to false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isServer) {
        // Generate Dynamic Routes

        console.log(this.nuxt);

        // $shopify = new ShopifyService($shopify);
        // let routes = $shopify.generateDynamicRoutes();
        // this.buildContext.options.generate.routes.push(routes);
      }
    }
  }
};
