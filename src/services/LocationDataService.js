import http from "../http-common";


class LocationDataService {

  getAll() {
    return http.get("/locations/");
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/locations/"+id);
  }

  create(data) {
    return http.post("/locations/", data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/locations/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/locations/"+id);
  }


}

export default new LocationDataService();