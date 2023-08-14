// Import class dependencies.
import axios from 'axios'
import store from "../store/index"
import _default from './endpoints/_default'
import accountsApi from './endpoints/accounts'
import authApi from './endpoints/auth'

import userMetadata from './endpoints/userMetadata'
import usersApi from './endpoints/users'

// Default axios client.
let axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 120000
});

// Response interceptor.
axiosInstance.interceptors.response.use((response) => response, (error) => {
  if (error && error.response && error.response.status === 401) {
    console.log('May be you must refresh token')
    // store.dispatch('Auth/resetUser', false).then(() => router.push({
    //   name: 'login'
    // }))
  }
  return Promise.reject(error);
}
);

axiosInstance.interceptors.request.use((config) => {
  if (config.noAuth) {
    return config;
  };
  const token = store.getters['Auth/token'] ? store.getters['Auth/token'].access_token : null;
  console.log('Check Display current access_token', token);

  config.headers.Authorization = "Bearer " + token;
  return config
});

const api = {
  default: _default(axiosInstance),
  auth: authApi(axiosInstance),
  accounts: accountsApi(axiosInstance),
  users: usersApi(axiosInstance),
  userMetadata: userMetadata(axiosInstance),
};

export default api;
