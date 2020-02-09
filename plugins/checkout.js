// Shopify requires you to persist the CheckoutId.
// This is to persist the Checkout Id to SSR storage.
// https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt

export default ({ app }, inject) => {
  const checkout = {
    getCheckoutId: () => {
      return app.$cookies.get("checkoutId");
    },

    setCheckoutId: checkoutId => {
      app.$cookies.set("checkoutId", checkoutId, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7
      });
    }
  };

  inject("checkout", checkout);
};
