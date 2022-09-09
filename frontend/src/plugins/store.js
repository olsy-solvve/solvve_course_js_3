import { createStore } from "vuex";

export const store = createStore({
  state() {
    return { data: false };
  },
  getters: {},
  mutations: {
    STATUS_LOGIN(state) {
      state.data = true;
    },
    STATUS_LOGOUT(state) {
      state.data = false;
    },
  },
  actions: {},
});

export default store;
