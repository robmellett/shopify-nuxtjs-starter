<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <nuxt-link
              :to="{ name: 'index' }"
              class="outline-none"
              active-class=""
              exact
            >
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
            </nuxt-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <site-navigation-links />
          </div>
        </div>
        <div class="ml-auto sm:ml-6 sm:block">
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
const SiteNavigationLinks = () => import("~/components/navigation/SiteNavigationLinks");

export default {
  name: 'SiteHeader',

  components: {
    CartIcon,
    SiteNavigationButton,
    SiteNavigationDropdown,
    SiteNavigationLinks
  },

  computed: {
    open() {
      return this.$store.getters['navigation/isOpen'];
    }
  }
}
</script>
