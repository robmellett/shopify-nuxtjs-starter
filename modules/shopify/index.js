const path = require("path");

export default async function ShopifyModule(moduleOptions) {

  // console.log(this.nuxt.$shopify)

  // Register the Shopify Build Plugin
  // this.addPlugin({
  //   src: path.resolve(__dirname, "plugin.js"),
  //   fileName: "plugin.js",
  //   options: this.options.shopify
  // });

  // This hooks is called only for `nuxt dev` and `nuxt build` commands
  this.nuxt.hook('build:before', async (ctx) => {

    console.log(">>>> Nuxt JS Hook to catch the build")
    this.addPlugin({
      src: path.resolve(__dirname, "plugin.js"),
      fileName: "plugin.js",
      options: this.options.shopify
    });
  });
}

// REQUIRED if publishing the module as npm package
// module.exports.meta = require('./package.json')
