<template>
<div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <h2>Sign up</h2>
      <p v-if="$route.query.redirect">
        You need to login first.
      </p>
      <form @submit.prevent="signup">
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
      <p class="control has-icons-left">
          <input class="input" type="password" v-model="confirm" placeholder="Confirm Password">
          <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
          </span>
      </p>
      </div>
      <div class="field">
      <p class="control">
          <button type="submit" class="button is-success">
          Register
          </button>
      </p>
      <p v-if="error" class="error">Bad login information</p>
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
      confirmpass: '',
      error: false
    }
  },
  methods: {
    singup () {

      
      auth.singup(this.email, this.pass,this.confirmpass, signupCallback => {
        if (!signupCallback) {
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