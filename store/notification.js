export const state = () => ({
  items: []
});

export const getters = {
  items(state) {
    return state.items;
  },

  hasNotifications(state) {
    return state.items.length > 0;
  }
};

export const actions = {
  add({ commit }, notification) {
    commit("add", notification);
  },

  remove({ commit }, notification) {
    commit("remove", notification);
  }
};

export const mutations = {
  add(state, notification) {
    state.items.push(notification);
  },

  remove(state, notification) {
    let index = state.items.findIndex(n => n.message === notification.message);

    state.items.splice(index, 1);
  }
};
