<template>

<div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter box">
      <h2>Login</h2>
      <p v-if="$route.query.redirect">
        You need to login first.
      </p>
      <form @submit.prevent="login">
      <div class="field">
      <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" v-model="email" placeholder="Email">
          <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
          </span>
      </p>
      </div>
      <div class="field">
      <p class="control has-icons-left">
          <input class="input" type="password" v-model="pass" placeholder="Password">
          <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
          </span>
      </p>
      </div>
      <div class="field">
      <p class="control">
          <button type="submit" class="button is-success">
          Login
          </button>
      </p>
      <p v-if="error" class="error">{{ error_message }}</p>
      </div>
  </form>

    </div>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data () {
    return {
      email: '',
      pass: '',
      error: false,
      error_message:""
    }
  },
  methods: {
    login () {

      if(this.email.trim() ==""){
        this.error_message = "Ingrese un correo electrónico valido";
        this.error = true;
        return;
      }

       if(this.pass.trim() ==""){
        this.error_message = "Ingrese una contraseña valida";
        this.error = true;
        return;
      }
      
      auth.login(this.email, this.pass, loggedIn => {

        console.log("callback");
        console.log(loggedIn);

        if (!loggedIn) {
          this.error_message = "El usuario o contraseña son invalidos!";
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }

      })
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>