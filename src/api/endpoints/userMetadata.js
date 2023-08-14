export default function (axios) {
  return {
    appTour : () =>{
      return axios.get('users/metadata/app-tour-guide').then(response => response.data);
    },
    addStepTourGuid : ( data ) =>{
      return axios.post('users/metadata/app-tour-guide',data).then(response => response.data);
    },
    updateStepTourGuid : ( data ) =>{
      return axios.put('users/metadata/app-tour-guide',data).then(response => response.data);
    },
    canShowAppTourGuid : (data)=> {
      return axios.get('users/metadata/app-tour-guide/show',data).then(response => response.data);
    },
    fetchUserMetadata : (key) =>{
      return  axios.get('users/metadata',{ params: {"key" : key}}).then(response => response.data);
    },
    updateUserMetadata : (key,value) =>{
      return  axios.put('users/metadata',{"key" : key,"value" : value}).then(response => response.data);
    }
  }
}
