import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
  },
  getters: {
  },
  mutations: {
    mutateToken: (state, obj) => {
      state.token = obj;
    }
  },
  actions: {
    setToken: ({ commit }, obj) => {
      commit('mutateToken', obj);
    }
  },
  modules: {
    
  },
});
