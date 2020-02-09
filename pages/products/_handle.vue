<template>
  <div>
    <h1>{{ product.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',

  async asyncData({ $shopify, params }) {
    let product = await $shopify.product.fetchByHandle(params.handle)
      .then((product) => {
        if (!product) {
          error({ statusCode: 403, message: 'Product does not have Storefront Permissions' })
        }
        return product;
      })
      .catch((err) => {
        error({ statusCode: 404, message: 'Product not found' })
      });

    return {
      product: product,
    }
  }
}
</script>
