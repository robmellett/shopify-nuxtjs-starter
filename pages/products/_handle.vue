<template>
  <div class="flex flex-row">
    <div class="w-full md:w-1/2">
      <img src="https://via.placeholder.com/150x150" alt="">
    </div>
    <div>
      <div>
        <h1 class="text-4xl font-bold">{{ product.title }}</h1>
        <p>{{ product.description }}</p>
      </div>

      <product-pricing
        :variant="selectedVariant"
      />

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

  mounted() {
    this.$store.dispatch("product/setProduct", this.product);
  },

  computed: {
    selectedVariant() {
      return this.$store.getters["product/selectedVariant"];
    },

    isAvailable() {
      return !!(this.selectedVariant && this.selectedVariant.available === true);
    },
  }
}
</script>
