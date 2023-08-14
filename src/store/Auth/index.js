import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  loggedIn: false,
  isSubscribed: false,
  isClient: false,
  isAdmin: false,
  token: null,
  user: [],
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
