import http from "../http-common";


class AuthenticationService {

 
  login(data) {
    return http.post("/authentication/login", data);
  }
  


}

export default new AuthenticationService();