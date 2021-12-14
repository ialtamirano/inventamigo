import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { 
    "Content-Type" : "application/json"
  }
});


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
/*
export default axios.create({
  baseURL: "http://192.168.0.18:8080/",
  headers: { 
    "Content-Type" : "application/json"
  }
});*/