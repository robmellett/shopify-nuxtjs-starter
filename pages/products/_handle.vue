<template>
  <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-4 p-4">
    <div class="col-span-2 col-span-2">
      <product-gallery />
    </div>

    <div class="col-span-2">
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
const ProductGallery = () => import('~/components/product-detail/ProductGallery');
const ProductPricing = () => import('~/components/product-detail/ProductPricing');

export default {
  name: 'ProductPage',

  components: {
    AddToCart,
    ProductOptions,
    ProductGallery,
    ProductPricing
  },

  async fetch ({ $shopify, store, params, error }) {
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
