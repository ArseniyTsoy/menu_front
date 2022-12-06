import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      positions: [],
      categories: [],
      token: null,
      userId: null,
      userName: null,
      isAuthenticated: false
    };
  },
  mutations: {
    setPositions(state, payload) {
      state.positions = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setUserId(state, payload) {
      state.userId = payload;
    },
    setUserName(state, payload) {
      state.userName = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  getters: {
    positionsGetter(state) {
      return state.positions;
    },
    categoriesGetter(state) {
      return state.categories;
    },
    tokenGetter(state) {
      return state.authToken;
    },
    userIdGetter(state) {
      return state.userId;
    },
    userNameGetter(state) {
      return state.userName;
    },
    isAuthenticatedGetter(state) {
      return state.isAuthenticated;
    }
  },
  actions: {
    setPositions(context, payload) {
      context.commit("setPositions", payload);
    },
    setCategories(context, payload) {
      context.commit("setCategories", payload);
    },
    authUser(context, payload) {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("userId", payload.userId);
      localStorage.setItem("userName", payload.userName);
      localStorage.setItem("isAuthenticated", true);

      context.commit("setToken", payload.token);
      context.commit("setUserId", payload.userId);
      context.commit("setUserName", payload.userName);
      context.commit("setIsAuthenticated", true);
    },
    logout(context) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      localStorage.removeItem("isAuthenticated");

      context.commit("setToken", null);
      context.commit("setUserId", null);
      context.commit("setUserName", null);
      context.commit("setIsAuthenticated", false);
    }
  }
});

export default store;