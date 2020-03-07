<template>
  <div
    :class="{'block': open, 'hidden': !open}"
    class="sm:hidden"
  >
    <div class="px-2 pt-2 pb-3">
      <nuxt-link
        :to="{ name: 'index' }"
        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        exact
      >
        Home
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'products' }"
        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        exact
      >
        Products
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'collections' }"
        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        exact
      >
        Collections
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'articles' }"
        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        exact
      >
        Blog
      </nuxt-link>
    </div>
    <div class="pt-4 pb-3 border-t border-gray-700">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium leading-6 text-white">Tom Cook</div>
          <div class="text-sm font-medium leading-5 text-gray-400">tom@example.com</div>
        </div>
      </div>
      <div class="mt-3 px-2">
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Your Profile</a>
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Settings</a>
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Sign out</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteNavigationDropDown',

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
