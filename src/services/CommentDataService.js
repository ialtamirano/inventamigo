import http from "../http-common";


class PartDataService {

  getAll(entity_name,entity_id) {
    return http.get("/comments/",
      {
        params: {
          entity_name: entity_name,
          entity_id: entity_id
      }
    }
    );
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/comments/"+id);
  }

  // eslint-disable-next-line no-unused-vars  
  search(query) {
    return http.get("/comments/search/"+query.name,{
      params: {
        category_id: query.category_id
    }
    });
  }

  create(data) {
    return http.post("/comments/", data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/comments/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/comments/"+id);
  }


}

export default new PartDataService();