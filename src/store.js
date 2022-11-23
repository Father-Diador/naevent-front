import HttpUtils from '@/util/httpUtils';

import storeEventsModule from "@/store/storeEventsModule";
import storeUserModule from './store/storeUserModule';

// export const API_URL = process.env.VUE_APP_API_URL;

import { createStore } from 'vuex'

export default createStore({
  modules: {
    events: storeEventsModule,
    user: storeUserModule,
  },
  state: {

  },
  getters: {
    getLoader: (state) => { //Loader
      return state.load;
    },
  },
  mutations: {
    loadingForms (state, payload) { //Loader
      state.load = payload;   
    },
  },
  actions: {
    loadingForms({commit, state}, payload) { //Loader
      commit('loadingForms', payload);
    },
  },
}); 