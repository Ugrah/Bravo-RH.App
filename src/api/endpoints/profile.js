export default function (axios) {
    return {
      get: (userId) => {
        return axios.get(`/profiles/${userId}`)
          .then(response => response.data);
      },
      post: (profileData) => {
        return axios.post(`/profiles`, profileData)
          .then(response => response.data)
      },
      put: (profileId, profileData) => {
        return axios.put(`/profiles/${profileId}`, profileData)
          .then(response => response.data)
      },
      delete: (userId) => {
        return axios.delete(`/profiles/${userId}`)
          .then(response => response.data);
      },
      reset_password: (profileId, data) => {
        return axios.post(`/profiles/reset-password/${profileId}`, data)
          .then(response => response.data)
      },
    }
  }
