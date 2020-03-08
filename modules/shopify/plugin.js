import ShopifyService from "~/services/ShopifyService"

export default ({ app }, inject) => {

  // Module Options from nuxt.config.js
  let options = <%= JSON.stringify(options, null, 2) %>

  console.log(">>> Accessing the Shopify PLugin");
  console.log(app);
  // $shopify = new ShopifyService()
};
