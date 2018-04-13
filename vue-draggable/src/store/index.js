import Vue from 'vue'
import Vuex from 'vuex'

import {state} from './state/all-state'
import {actions} from './actions/all-actions'
import {mutations} from './mutations/all-mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
