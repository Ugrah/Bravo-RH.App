export default function (axios) {
  return {
    get: (url) => {
      return axios.get(url)
        .then(response => response.data);
    },
    post: (url,attributes) => {
      return axios.post(url,attributes)
      .then(response => response.data);
    },
    put : (url,attributes)=>{
      return axios.put(url,attributes)
      .then(response => response.data);
    } ,
    delete : (url,attributes)=>{
      return axios.delete(url,attributes)
      .then(response => response.data);
    }
  }
}
