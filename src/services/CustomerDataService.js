import http from "../http-common";


class CustomerDataService {

  getAll() {
    return http.get("/customers/");
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/customers/"+id);
  }

  // eslint-disable-next-line no-unused-vars  
  search(query) {
    return http.get("/customers/search/"+query.name,{
      params: {
        
    }
    });
  }

  create(data) {
    return http.post("/customers/", data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/customers/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/customers/"+id);
  }


}

export default new CustomerDataService();