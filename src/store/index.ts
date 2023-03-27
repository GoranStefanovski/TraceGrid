import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    drivers: [],
  },
  getters: {
  },
  mutations: {
    mutateToken: (state, obj) => {
      state.token = obj;
    },
    mutateDrivers: (state, obj) => {
      state.drivers = obj
    }
  },
  actions: {
    setToken: ({ commit }, obj) => {
      commit('mutateToken', obj);
    },
    setDrivers: ({ commit }, obj) =>{
      commit('mutateDrivers', obj);
    }
  },
  modules: {
    
  },
});
