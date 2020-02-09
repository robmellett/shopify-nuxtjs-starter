<template>
  <div class="container">
    <h1>Shopify Store Demo</h1>

    <ul>
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
  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    return { products };
  }
}
</script>
