import Client from 'shopify-buy/index.unoptimized.umd';
import ShopifyService from "~/services/ShopifyService"

export default async ({ app }, inject) => {

  // Module Options from nuxt.config.js
  let options = <%= JSON.stringify(options, null, 2) %>

  // Initializing a client
  const client = Client.buildClient({
    domain: options.domain,
    storefrontAccessToken: options.storefrontAccessToken,
  });

  let service = new ShopifyService(client);
  let routes = []; await service.generateDynamicRoutes();

  console.log(routes);

  console.log(">>>> Routes");
  console.log(routes)
};
