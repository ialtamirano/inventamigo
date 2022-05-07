import AuthenticationService from "./services/AuthenticationService"


export default {
    login (email, pass, cb) {
   

      cb = arguments[arguments.length - 1]

    
      loginRequest(email, pass, (res) => {

        if (res.authenticated) {

          localStorage.token = res.token
          if (cb) cb(true)
          this.onChange(true)
        } 
        else {
          if (cb) cb(false)
          this.onChange(false)
        }
      })
    },
    singup(email, pass, confirmpass, cb){
      signupRequest(email, pass,confirmpass, (res) => {
        if (res.authenticated) {
          localStorage.token = res.token
          if (cb) cb(true)
          this.onChange(true)
        } else {
          if (cb) cb(false)
          this.onChange(false)
        }
      })
    }
    , 
    getToken () {
      return localStorage.token
    },
  
    logout (cb) {
      delete localStorage.token
      if (cb) cb()
      this.onChange(false)
    },
  
    loggedIn () {
      return !!localStorage.token
    },
  
    onChange () {
    

    }
  }
  


  function loginRequest (email, pass, cb) {

    var data = {      
        "email_address" : email,
        "password" : pass
    };

    AuthenticationService.login(data)
      .then(response => {

            console.log(response.data);
        cb({
            authenticated: true,
            token: response.data.data.token
          })
 
      })
      .catch( e => {
        cb({ authenticated: false });
        console.log(e);
      });


    /*setTimeout(() => {
      if (email === 'joe@example.com' && pass === 'password1') {
        cb({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      } else {
        cb({ authenticated: false })
      }
    }, 0)*/
  }

  function signupRequest (email, pass,confirmpass, cb) {

    var data = {      
        "email_address" : email,
        "password" : pass,
        "confirmpassword": confirmpass
    };

    AuthenticationService.signup(data)
      .then(response => {

            console.log(response.data);
        cb({
            authenticated: true,
            token: response.data.data.token
          })
 
      })
      .catch( e => {
        cb({ authenticated: false });
        console.log(e);
      });


    /*setTimeout(() => {
      if (email === 'joe@example.com' && pass === 'password1') {
        cb({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      } else {
        cb({ authenticated: false })
      }
    }, 0)*/
  }