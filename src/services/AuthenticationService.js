import http from "../http-common";


class AuthenticationService {

 
  login(data) {
    return http.post("/authentication/login", data);
  }

  signup(data) {
    return http.post("/authentication/signup", data);
  }

  


}

export default new AuthenticationService();