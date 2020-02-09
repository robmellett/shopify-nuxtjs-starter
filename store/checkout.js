// Shopify Cart Documentation
// https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#update-cart

export const state = () => ({
  checkout: {}
});

export const getters = {
  checkout(state) {
    return state.checkout;
  },

  isCheckoutComplete(state) {
    return (
      state.checkout &&
      state.checkout.completedAt !== null &&
      typeof state.checkout.completedAt !== "undefined"
    );
  }
};

export const actions = {
  async createCheckout({ state, commit }) {
    await this.$shopify.checkout.create().then(checkout => {
      commit("setCheckoutId", checkout.id);
      commit("updateCheckout", checkout);
    });
  },

  async addLineItem({ commit, dispatch }, { selectedVariantId }) {
    const lineItems = [{ variantId: selectedVariantId, quantity: 1 }];

    await this.$shopify.checkout
      .addLineItems(this.app.$checkout.getCheckoutId(), lineItems)
      .then(checkout => {
        commit("updateCheckout", checkout);
      });

    dispatch(
      "notification/add",
      {
        message: "Product added to cart",
        type: "cart"
      },
      { root: true }
    );
  },

  async removeLineItem({ commit, dispatch }, { selectedVariantId }) {
    const lineItemIdsToRemove = [selectedVariantId];

    await this.$shopify.checkout
      .removeLineItems(this.app.$checkout.getCheckoutId(), lineItemIdsToRemove)
      .then(checkout => {
        commit("updateCheckout", checkout);
      });

    dispatch(
      "notification/add",
      {
        message: "Product removed from cart",
        type: "cart"
      },
      { root: true }
    );
  },

  async updateQuantity({ commit, state }, { selectedVariantId, quantity }) {
    const lineItemsToUpdate = [{ id: selectedVariantId, quantity: quantity }];

    await this.$shopify.checkout
      .updateLineItems(this.app.$checkout.getCheckoutId(), lineItemsToUpdate)
      .then(checkout => {
        commit("updateCheckout", checkout);
      });
  },

  async updateCheckout({ commit, state }) {
    await this.$shopify.checkout
      .fetch(this.app.$checkout.getCheckoutId())
      .then(checkout => {
        commit("updateCheckout", checkout);
      });
  }
};

export const mutations = {
  setCheckoutId(state, checkoutId) {
    this.app.$checkout.setCheckoutId(checkoutId);
  },

  updateCheckout(state, checkout) {
    state.checkout = checkout;
  }
};
