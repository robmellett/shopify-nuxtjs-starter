<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="block lg:hidden h-8 w-auto"
              src="/img/logos/workflow-mark-on-dark.svg"
              alt=""
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="/img/logos/workflow-logo-on-dark.svg"
              alt=""
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
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
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex items-center">
            <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </div>
        <site-navigation-button />
      </div>
    </div>
    <site-navigation-dropdown />
  </nav>
</template>

<script>
const  SiteNavigationButton = () => import("~/components/navigation/SiteNavigationButton");
const  SiteNavigationDropdown = () => import("~/components/navigation/SiteNavigationDropDown");

export default {
  name: 'SiteHeader',

  components: {
    SiteNavigationButton,
    SiteNavigationDropdown
  },

  computed: {
    open() {
      return this.$store.getters['navigation/isOpen'];
    }
  }
}
</script>

<style lang="scss">
.nuxt-link-exact-active {
  @apply
    px-3
    py-2
    rounded-md
    text-sm
    font-medium
    leading-5
    text-white
    bg-gray-900;

  &:focus {
    @apply
      outline-none
      text-white
      bg-gray-700
  }
}
</style>
