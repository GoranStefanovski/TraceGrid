import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    drivers: [],
    isLogged: false,
  },
  getters: {
  },
  mutations: {
    mutateToken: (state, obj) => {
      state.token = obj;
    },
    mutateDrivers: (state, obj) => {
      state.drivers = obj
    },
    mutateIsLogged: (state, obj) => {
      state.isLogged = obj
    }
  },
  actions: {
    setToken: ({ commit }, obj) => {
      commit('mutateToken', obj);
    },
    setDrivers: ({ commit }, obj) =>{
      commit('mutateDrivers', obj);
    },
    setIsLogged: ({ commit }, obj) => {
      commit('mutateIsLogged', obj)
    }
  },
  modules: {
    
  },
});
