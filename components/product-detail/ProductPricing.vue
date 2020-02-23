<template>
  <div
    class="text-xl my-4"
    v-if="selectedVariant"
  >
    <p
      v-if="isOnSale"
      :class="{ 'line-through text-decoration-red' : isOnSale }"
    >
      {{ selectedVariant.compareAtPrice | currency }}
    </p>
    <p
      v-if="selectedVariant.price"
    >{{ selectedVariant.price | currency }}</p>
  </div>
</template>

<script>
import { isOnSale } from '~/utilities/productAttributes';

export default {
  name: 'ProductPricing',

  props: {
    variant: { type: Object }
  },

  computed: {
    selectedVariant() {
      return this.$store.getters["product/selectedVariant"];
    },

    isOnSale() {
      return isOnSale(this.selectedVariant);
    },
  },
}
</script>
