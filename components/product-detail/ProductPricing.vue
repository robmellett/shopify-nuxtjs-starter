<template>
  <div class="text-xl my-4">
    <div>
      <p
        v-if="selectedVariant && isOnSale"
        :class="{ 'line-through text-decoration-red' : isOnSale }">
        {{ selectedVariant.compareAtPrice | currency }}
      </p>
    </div>
    <p v-if="selectedVariant && selectedVariant.price">
      {{ selectedVariant.price | currency }}
    </p>
  </div>
</template>

<script>
import { isOnSale } from '~/utilities/productAttributes';

export default {
  name: 'ProductPricing',

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
