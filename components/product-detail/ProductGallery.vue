<template>
  <div class="w-full min-h-full h-full flex items-center justify-center">
    <img
      v-if="hasImage"
      :src="selectedVariant.image.src"
      class="object-contain p-4"
    >
    <p
      v-if="!hasImage"
      class="text-center"
    >There is no image available.</p>
  </div>
</template>

<script>
export default {
  name: 'ProductGallery',

  computed: {
    selectedVariant() {
      return this.$store.getters["product/selectedVariant"];
    },

    hasImage() {
      return this.selectedVariant && this.selectedVariant.image;
    }
  }
}
</script>
