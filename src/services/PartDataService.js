import http from "../http-common";


class PartDataService {

  getAll() {
    return http.get("/parts/");
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/parts/"+id);
  }

  // eslint-disable-next-line no-unused-vars  
  search(query) {
    return http.get("/parts/search/"+query);
  }

  create(data) {
    return http.post("/parts/", data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/parts/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/parts/"+id);
  }


}

export default new PartDataService();