<template>
  <div class="flex">
    <nuxt-link
      :to="{ name: 'index' }"
      class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      exact
    >
      Home
    </nuxt-link>
    <nuxt-link
      :to="{ name: 'products' }"
      class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      exact
    >
      Products
    </nuxt-link>
    <nuxt-link
      :to="{ name: 'collections' }"
      class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      exact
    >
      Collections
    </nuxt-link>
    <nuxt-link
      :to="{ name: 'articles' }"
      class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      exact
    >
      Blog
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SiteNavigationLinks',

  props: {

  },

  components: {

  },

  data() {
    return {

    }
  },

  computed: {

  },

  methods: {

  },
}
</script>
