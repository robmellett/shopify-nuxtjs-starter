<template>
  <button
    @click="addToCart"
    :disabled="!isAvailable"
    title="Add to Cart"
    class="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded"
    :class="{ 'opacity-50': !isAvailable }"
  >
    Add to Cart
  </button>
</template>

<script>
export default {
  name: 'AddToCartButton',

  computed: {
    selectedVariant() {
      return this.$store.getters["product/selectedVariant"];
    },

    isAvailable() {
      return !!(this.selectedVariant && this.selectedVariant.available === true);
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch("checkout/addLineItem", {
        selectedVariantId: this.selectedVariant['id'],
        quantity: 1
      });
    }
  },
}
</script>
