import http from "../http-common";


class CategoryDataService {

  getAll() {
    return http.get("/categories/");
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/categories/"+id);
  }

  create(data) {
    return http.post("/categories/", data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/categories/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/categories/"+id);
  }


}

export default new CategoryDataService();