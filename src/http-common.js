import axios from "axios";

let  appUrl = "http://localhost:8080/";

const axiosInstance = axios.create({
  baseURL: appUrl
});

axiosInstance.baseURL = appUrl;

axiosInstance.interceptors.request.use((config) => {

  if (localStorage.token) {
      config.headers['Authorization'] =' Bearer ' +  localStorage.token;
  }

  return config;
});



axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(error);
  if (401 === error.response.status) {
      window.location.replace('/login')
      return Promise.resolve(error.response);
  } else {
    
      return Promise.reject(error);
  }
});

export default axiosInstance;
