import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      positions: [],
      categories: []
    };
  },
  mutations: {
    setPositions(state, payload) {
      state.positions = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    }
  },
  getters: {
    positionsGetter(state) {
      return state.positions;
    },
    categoriesGetter(state) {
      return state.categories;
    }
  },
  actions: {
    setPositions(context, payload) {
      context.commit("setPositions", payload);
    },
    setCategories(context, payload) {
      context.commit("setCategories", payload);
    }
  }
});

export default store;