<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="block lg:hidden h-8 w-auto"
              src="~assets/images/acme-logo-light.svg"
              alt="Site Logo"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="~assets/images/acme-logo-light.svg"
              alt="Site Logo"
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
            <cart-icon />
          </div>
        </div>
        <site-navigation-button />
      </div>
    </div>
    <site-navigation-dropdown />
  </nav>
</template>

<script>
const CartIcon = () => import("~/components/cart/CartIcon");
const SiteNavigationButton = () => import("~/components/navigation/SiteNavigationButton");
const SiteNavigationDropdown = () => import("~/components/navigation/SiteNavigationDropDown");

export default {
  name: 'SiteHeader',

  components: {
    CartIcon,
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
