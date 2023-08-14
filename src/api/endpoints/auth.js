
export default function (axios) {
  return {
    register(data) {
      return axios.post(`/auth/register`, data, {
        noAuth: true
      }).then(response => response.data);
    },
    // registerEmail(data) {
    //   return axios.post(`/auth/register/email`, { "email": data }).then(response => response.data);
    // },
    login(email, password) {
      if (!email || !password) {
        return Promise.reject(new Error('Both `email` and `password` should be set'));
      }

      return axios.post(`/auth/login`, {
        'username': email,
        'password': password
      }, {
        noAuth: true
      }).then(response => response.data);
    },
    logout: () => {
      return axios.post(`/auth/logout`)
        .then(response => response.data);
    },
    refreshToken(refreshToken) {
      return axios.post(`/auth/token/refresh`, {
        'refresh_token': refreshToken
      }, {
        noAuth: true
      }).then(response => response.data);
    },
    me() {
      return axios.get(`/auth/me`).then(response => response.data);
    },
  }
}
