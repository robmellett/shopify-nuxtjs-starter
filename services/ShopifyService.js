import { last } from 'lodash';

export default class ShopifyService {
  constructor($shopify) {
    this.$shopify = $shopify;
  }

  async generateDynamicRoutes() {
    let routes = [];
    let hasNextPage = false;

    let products = await this.$shopify.product.fetchAll().then(products => {
      products.forEach(p => {
        routes.push({
          route: "/products/" + p.handle,
          payload: p
        });
      });

      return products;
    });

    do {
      products = await this.$shopify
        .fetchNextPage(products)
        .then((nextPageOfProducts) => {
          nextPageOfProducts.model.forEach(p => {
            console.log("Adding 2" + p.handle);
            routes.push({
              route: "/products/" + p.handle,
              payload: p
            });
          });

          return nextPageOfProducts;
        });

      hasNextPage = last(products.model).hasNextPage;
    } while (hasNextPage);
    return routes;
  }
}
