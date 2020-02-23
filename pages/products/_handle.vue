<template>
  <div class="flex flex-row">
    <div class="w-full md:w-1/2">
      <img src="https://via.placeholder.com/150x150" alt="">
    </div>
    <div>
      <h1>{{ product.title }}</h1>
      <p>The Price</p>

    </div>
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
  },

  computed: {
    selectedVariant() {

    }
  }
}
</script>
