export default {
  commitResetUser(state, data) {
    state.loggedIn = data;
    state.user = {}
    state.token = null;
    state.isAdmin = data;
    state.isClient = data;
  },
  commitToken(state, data) {
    state.token = data
  },
  commitisAdmin(state, data) {
    state.isAdmin = data
  },
  commitisClient(state, data) {
    state.isClient = data
  },
  commitUser(state, data) {
    state.user = {};
    state.user = data
  },
  commitLoggedIn(state, data) {
    state.loggedIn = data
  },
}
