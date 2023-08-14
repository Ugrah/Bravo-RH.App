export default {
  resetUser(context, payload) {
    context.commit('commitResetUser', payload)
  },
  updateToken(context, payload) {
    context.commit('commitToken', payload)
  },
  updateisAdmin(context, payload) {
    context.commit('commitisAdmin', payload)
  },
  updateisClient(context, payload) {
    context.commit('commitisClient', payload)
  },
  updateUser(context, payload) {
    context.commit('commitUser', payload)
  },
  updateLoggedIn(context, payload) {
    context.commit('commitLoggedIn', payload)
  },
  updateIsLoggedIn(context, payload) {
    context.commit('commitLoggedIn', payload)
  },
}
