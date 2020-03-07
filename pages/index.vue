<template>
  <div class="container">
    <h1 class="mt-8 text-center text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
      Shopify Store Demo
    </h1>

    <ul class="mt-4 text-center">
      <li v-for="product in products" :key="product.id">
        <nuxt-link :to="{ name: 'products-handle', params: { 'handle' : product.handle }}">
          {{ product.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    return { products };
  }
}
</script>
