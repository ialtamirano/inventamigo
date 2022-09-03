import http from "../http-common";
//import auth from "../auth";


class FileDataService {

  getAll(entity_name,entity_id) {
    return http.get("/files/",
    {
      params: {
        entity_name: entity_name,
        entity_id: entity_id
      }
    });
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/files/"+id);
  }

  // eslint-disable-next-line no-unused-vars  
  view(id) {
   //return http.baseURL + "files/serve/" + id;
   return http.get("/files/serve/"+id,{ responseType: 'blob'});
  }

  // eslint-disable-next-line no-unused-vars  
  search(query) {
    return http.get("/files/search/"+query.name,{
      params: {
        category_id: query.category_id
    }
    });
  }

  create(entity_name,entity_id,data) {
    return http.post("/files/?entity_name="+entity_name+"&entity_id="+entity_id, data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/files/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/files/"+id);
  }


}

export default new FileDataService();