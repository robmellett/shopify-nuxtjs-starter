import Client from "shopify-buy/index.unoptimized.umd";
const fetch = require("node-fetch");

export default async function ShopifyModule(moduleOptions) {

  // Register the Shopify Build Plugin
  // this.addPlugin({
  //   src: path.resolve(__dirname, "plugin.js"),
  //   fileName: "plugin.js",
  //   options: this.options.shopify
  // });

  // This hooks is called only for `nuxt dev` and `nuxt build` commands
  this.nuxt.hook('build:before', async (ctx) => {
    const client = Client.buildClient(
      {
        domain: this.options.shopify.domain,
        storefrontAccessToken: this.options.shopify.storefrontAccessToken
      },
      fetch
    );

    let routes = await client.product.fetchAll(250).then(products => {
      return products.map(p => {
        return {
          route: "/products/" + p.handle,
          payload: p
        };
      });
    });

    // Push routes to Nuxt Generate Routes option
    ctx.options.generate.routes = [...routes];
  });
}

// REQUIRED if publishing the module as npm package
// module.exports.meta = require('./package.json')
