import Vue from "vue";
import { getSelectedVariant } from "~/utilities/product";

export const state = () => ({
  product: {},
  selectedProductOptions: {}
});

export const getters = {
  selectedVariant: state =>
    getSelectedVariant(state.product.variants, state.selectedProductOptions)
};

export const actions = {
  setProduct({ commit }, product) {
    commit("setProduct", product);
    commit("hydrateProductOptions");
  },

  updateSelectedProductionOptions({ commit }, productOptions) {
    commit("setProductOptions", productOptions);
  }
};

export const mutations = {
  setProduct(state, product) {
    state.product = product;
  },

  setProductOptions(state, { key, value }) {
    Vue.set(state.selectedProductOptions, key, value);
  },

  hydrateProductOptions(state) {
    // When using the nuxt-link tags, vuex data is persisted across
    // page loads.  We need to clear it first.
    state.selectedProductOptions = {};

    // Load variant.selectedOptions
    let variant = state.product.variants[0];

    variant.selectedOptions.forEach(field => {
      Vue.set(state.selectedProductOptions, field.name, field.value);
    });
  }
};
