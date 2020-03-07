<template>
  <nuxt-link
    :to="{ name: 'index' }"
    class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
    exact
  >
    Home
  </nuxt-link>
</template>

<script>
export default {
  name: 'SiteNavigationLink',

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

<style lang="scss" scoped>
.nuxt-link-exact-active {
  @apply px-3
    py-2
    rounded-md
    text-sm
    font-medium
    leading-5
    text-white
    bg-gray-900;

  &:focus {
    @apply outline-none
      text-white
      bg-gray-700;
  }
}
</style>
