import axios from "axios";

export default axios.create({
  baseURL: "http://api.inventamigo.com/",
  headers: { 
    "Content-Type" : "application/json"
  }
});