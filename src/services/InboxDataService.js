import http from "../http-common";


class InboxDataService {

  getAll() {
    return http.get("/inbox/");
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/inbox/"+id);
  }

  create(data) {
    return http.post("/inbox/", data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/inbox/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/inbox/"+id);
  }


}

export default new InboxDataService();