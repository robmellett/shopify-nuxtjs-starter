import { last } from 'lodash';

export default class ShopifyService {
  constructor($shopify) {
    this.$shopify = $shopify;
  }

  async generateDynamicRoutes() {
    let routes = [];
    let hasNextPage = true;

    do {
      await this.$shopify.product.fetchAll().then((products) => {
        hasNextPage = last(products).hasNextPage;

        products.forEach(p => {
          console.log("Adding " + p.handle);
          routes.push({
            route: "/products/" + p.handle,
            payload: p
          });
        });
      })
    } while (hasNextPage);

    return routes;
  }
}
