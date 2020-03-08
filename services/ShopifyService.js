import { last } from 'lodash';

export default class ShopifyService {
  constructor($shopify) {
    this.$shopify = $shopify;
  }

  async generateDynamicRoutes() {
    let routes = [];

    // console.log(this.$shopify);

    let products = await this.$shopify.allProducts();
    products.forEach(p => {
      routes.push({
        route: '/products/' + p.handle,
        payload: p
      });
    });

    return routes;
  }

  // buildDynamicRoutes() {
  //   do {
  //     let products = await this.$shopify.allProducts();
  //     hasNextPage = last(products).hasNextPage;

  //     products.forEach(p => {
  //       routes.push({
  //         route: '/products/' + p.handle,
  //         payload: p
  //       });
  //     })
  //   } while (hasNextPage);

  //   return routes;
  // }
}
