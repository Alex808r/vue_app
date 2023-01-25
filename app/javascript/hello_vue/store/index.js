import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import items from './modules/items'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: "Mesage from Vuex"
  },
  mutations: {
    CHANGE_MESSAGE: (state, payload ) => {
      // state.message = 'Mesage from Mutation'
      // state.message = payload.external
      state.message = payload
    }
  },
  actions: {
    fetchMessage: (context) => {
      console.log(context)
      return Vue.prototype.$api.message()
        .then(({data}) => (context.commit('CHANGE_MESSAGE', data.message)))
    }
  },
  modules: {
    items: items
  },

  plugins: [createPersistedState()]
})
