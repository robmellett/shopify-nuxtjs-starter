<template>
  <div class="-mr-2 flex sm:hidden">
    <button
      @click="toggleNavigation"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
    >
      <svg
        class="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          :class="{'hidden': open, 'inline-flex': !open }"
          class="inline-flex"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          :class="{'hidden': !open, 'inline-flex': open }"
          class=""
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SiteNavigationButton',

  computed: {
    open() {
      return this.$store.getters["navigation/isOpen"];
    }
  },

  methods: {
    toggleNavigation() {
      this.$store.commit("navigation/toggleExpansion");
    }
  }
}
</script>
