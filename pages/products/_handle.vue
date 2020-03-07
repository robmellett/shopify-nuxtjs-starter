<template>
  <div class="flex flex-col md:flex-row p-4">
    <div class="w-full md:w-1/2">
      <img v-if="selectedVariant" :src="selectedVariant.image.src" class="object-contain">
    </div>
    <div class="w-full md:w-1/2">
      <div>
        <h1 class="text-4xl font-bold">{{ product.title }}</h1>
        <p>{{ product.description }}</p>
      </div>

      <product-pricing />

      <product-options
        :options="product.options"
        class="md:w-1/2"
      />

      <add-to-cart />
    </div>
  </div>
</template>

<script>
const AddToCart = () => import ('~/components/product-detail/AddToCartButton');
const ProductOptions = () => import('~/components/product-detail/ProductOptions');
const ProductPricing = () => import('~/components/product-detail/ProductPricing');

export default {
  name: 'ProductPage',

  components: {
    AddToCart,
    ProductOptions,
    ProductPricing
  },

  async fetch ({ $shopify, store, params }) {
    return await $shopify.product.fetchByHandle(params.handle)
      .then((product) => {
        if (!product) {
          error({ statusCode: 403, message: 'Product does not have Storefront Permissions' })
        }

        store.commit("product/setProduct", product)
      })
      .catch((err) => {
        error({ statusCode: 404, message: 'Product not found' })
      });
  },

  computed: {
    product() {
      return this.$store.getters["product/product"];
    },

    selectedVariant() {
      return this.$store.getters["product/selectedVariant"];
    },
  }
}
</script>
