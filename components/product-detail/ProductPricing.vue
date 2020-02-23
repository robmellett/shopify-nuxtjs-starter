<template>
  <div
    class="text-xl my-4"
    v-if="variant"
  >
    <p
      v-if="isOnSale"
      :class="{ 'line-through text-decoration-red' : isOnSale }"
    >
      {{ variant.compareAtPrice | currency }}
    </p>
    <p
      v-if="variant.price "
    >{{ variant.price | currency }}</p>
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
    isOnSale() {
      return isOnSale(this.variant);
    },
  },
}
</script>
