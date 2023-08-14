export default function (axios) {
  return {
    all: (params = {}) => {
      return axios.get(`/accounts`, { params })
        .then(response => response.data);
    },
    get: (id) => {
      return axios.get(`/accounts/${id}`)
        .then(response => response.data);
    },
    subscriptions: (params = {}) => {
      return axios.get(`/accounts/subscriptions`, { params })
        .then(response => response.data);
    },
    getAccountsNames: (params = {}) => {
      return axios.get(`/accounts/get-accounts-names`, { params })
        .then(response => response.data);
    },
    getAccountsWhereHasSubscription: (params = {}) => {
      return axios.get(`/accounts/get-accounts-has-subscription`, { params })
        .then(response => response.data);
    },

    getCurrentPlan: (accountId, params = {}) => {
      return axios.get(`/accounts/${accountId}/current_plan`, { params: params })
        .then(response => response.data);
    },
    post: (data) => {
      // return axios.get(`/accounts`)
      return axios.post(`/accounts`, data)
        .then(response => response.data);
    },
    update: (id, data) => {
      return axios.put(`/accounts/${id}`, data)
        .then(response => response.data)
    },
    delete: (id) => {
      return axios.delete(`/accounts/${id}`)
        .then(response => response.data);
    },
    detachDiscount: (accountId, discountId) => {
      return axios.put(`/accounts/${accountId}/discounts/${discountId}/detach_discount`)
        .then(response => response.data)
    },

    attachDiscounts: (accountId, discounts) => {
      return axios.put(`/accounts/${accountId}/discounts/attach_discounts`, { discounts })
        .then(response => response.data)
    },

    discounts: (id) => {
      return axios.get(`accounts/${id}/discounts`)
        .then(response => response.data);
    },
  }
}
