import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientSize: {
      width: 0,
      height: 0
    }
  },
  mutations: {
    UPDATE_CLIENTSIZE(state, obj) {
      state.clientSize = obj
    },
  },
  actions: {}
})