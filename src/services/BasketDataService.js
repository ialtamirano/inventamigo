import http from "../http-common";


class BasketDataService {

  getAll() {
    return http.get("/baskets/");
  }

 // eslint-disable-next-line no-unused-vars  
  get(id) {
    return http.get("/baskets/"+id);
  }

  // eslint-disable-next-line no-unused-vars  
  search(query) {
    return http.get("/basket/search/"+query.name,{
      params: {
        category_id: query.category_id
    }
    });
  }

  create(data) {
    return http.post("/baskets/", data);
  }
  // eslint-disable-next-line no-unused-vars  
  update(id, data) {
    
    return http.put("/baskets/"+id, data);
  }

  // eslint-disable-next-line no-unused-vars
  delete(id) {
    return http.delete("/baskets/"+id);
  }


}

export default new BasketDataService();