import http from "../http-common";


class PartDataService {

  getAll() {
    return http.get("/partnumbers/");
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/partnumbers/"+id);
  }

  // eslint-disable-next-line no-unused-vars  
  search(query) {
    return http.get("/partnumbers/search/"+query.name,{
      params: {
        category_id: query.category_id
    }
    });
  }

  create(data) {
    return http.post("/partnumbers/", data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/partnumbers/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/partnumbers/"+id);
  }


}

export default new PartDataService();