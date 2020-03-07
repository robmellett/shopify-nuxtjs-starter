export const state = () => ({
  open: false
});

export const getters = {
  isOpen(state) {
    return state.open;
  }
};

export const actions = {

};

export const mutations = {
  toggleExpansion(state) {
    state.open = !state.open;
  }
};
