export default function (axios) {
  return {
    list: (params = {}) => {
      return axios.get(`/users`, { params })
        .then(response => response.data);
    },
    get: (userId) => {
      return axios.get(`/users/${userId}`)
        .then(response => response.data);
    },
    me: () => {
      return axios.get(`/users/me`)
        .then(response => response.data);
    },
    post: (userData) => {
      return axios.post(`/users`, userData)
        .then(response => response.data)
    },
    put: (userId, userData) => {
      return axios.put(`/users/${userId}`, userData)
        .then(response => response.data)
    },
    delete: (userId) => {
      return axios.delete(`/users/${userId}`)
        .then(response => response.data);
    },
    logout: () => {
      return axios.get(`/users/logout`)
        .then(response => response.data);
    },
  }
}
