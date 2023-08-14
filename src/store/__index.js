// const _vue = require('vue');
// const _vuex = require('vuex');
// const createPersistedState = require('vuex-persistedstate');
// _vue.use(_vuex)

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import Auth from './Auth/index';
Vue.use(Vuex)

const debug = process.env.MODE !== 'production'

export default new Vuex.Store({
  state: {
    loader: false,
    title: '***',
  },
  plugins: [createPersistedState()],
  actions: {
    updatePageTitle(context, payload) {
      context.commit('commitTitle', payload)
    },
    updateLoader(context, payload) {
      context.commit('commitLoader', payload)
    },
  },
  getters: {
    loader: state => state.loader,
    title: state => state.title,
  },
  mutations: {
    commitTitle(state, data) {
      state.title = data
    },
    commitLoader(state, data) {
      state.loader = data
    },
  },
  modules: {
    Auth
  },
  strict: debug
})
