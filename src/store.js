import Vue from 'vue'
import Vuex from 'vuex'
import modules from './store/index'
import actions from './store/actions'
import getters from './store/getters'
import mutations from './store/mutations'
import state from './store/state'

// Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  actions,
  getters,
  modules,
  mutations,
  state
})

export default store