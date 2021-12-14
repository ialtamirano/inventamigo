<template>
    <nav class="navbar is-link is-fixed-top">   
        <div class="container">   
            <div class=" navbar-brand">
                <router-link class="navbar-item" :to="'/'">
                    <img src="../assets/img/inventamigo_logo_snake_white.png" >                    
                </router-link>
                <a role="button" class="navbar-burger" :class="active ? 'is-active' : ''"  @click="showMobilemenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div> 
            <div class="navbar-menu is-hidden-mobile" v-if="loggedIn"> 
                <div class="navbar-item  has-dropdown is-hoverable ">
                    <a class="navbar-link bd-navbar-ellipsis has-text-white" :to="'/'">
                        <span class="icon">
                            <i class="fas fa-ellipsis-h"></i>
                        </span>
                    </a>
                    <div class="navbar-dropdown bd-navbar-dropdown is-boxed">
                        <router-link class="navbar-item" data-route="" :to="'/parts/search'">
                                        <div>
                                            <div class="icon-text">
                                            <span class="icon has-text-link-dark">
                                                <i class="fas fa-tags"></i>
                                            </span>
                                            <span>
                                                <strong>Buscar en mi catalogo</strong>
                                            </span>
                                            </div>
                                            Busqueda de articulos, catalogo, canastas..
                                        </div>
                        </router-link>
                        <hr class="navbar-divider ">
                        <router-link class="navbar-item" data-route="" :to="'/customers'">
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-success">
                                    <i class="fas fa-bookmark"></i>
                                </span>
                                <span>
                                    <strong>Mis Clientes</strong>
                                </span>
                                </div>
                                Agrega nuevos clientes, direcciones, informacion de contacto...
                            </div>
                        </router-link>
                        <hr class="navbar-divider ">
                        <router-link class="navbar-item"  :to="{ name: 'locations-list'}" >
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-danger">
                                    <i class="fas fa-cubes"></i>
                                </span>
                                <span>
                                    <strong>Manejar mi inventario</strong>
                                </span>
                                </div>
                                Administrar mis entradas, salidas, transferencias, locaciones,...
                            </div>
                        </router-link>                    

                    </div>
                </div>
                <div class="navbar-item">
                    <SearchBar></SearchBar>
                </div>
                <div class="navbar-item navbar-end" id="navMenu">
                    <div class="navbar-end">
                        <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">Ivan</a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">Dashboard</a>
                                <a class="navbar-item">Profile</a><a class="navbar-item">Settings</a>
                                <hr class="navbar-divider">
                                <div class="navbar-item" @click="logout()" >Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-menu is-hidden-mobile" v-else>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                        </div>
                    </div>
                    </div>
            </div>
            <div id="navbarBasicExample" class="navbar-menu is-hidden-desktop" :class="active ? 'is-active' : ''">
                <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                    More
                    </a>

                    <div class="navbar-dropdown">
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Jobs
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                        Report an issue
                    </a>
                    </div>
                </div>
                </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </nav> 
</template>
<script>
import SearchBar from './SearchBar.vue'
import auth from '../auth'

export default {
  name: 'NavigationHeader',
  components: {
   SearchBar
  },
  data() {
    return {
      isActive: '',
      active: false,
      showNavbar: true,
      window: {
        width: 0,
        height: 0
      },
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.respNav();
   
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
   handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;

    },
    respNav() {
      if (this.window.width <= 767) {
        this.isActive = true;
      }
      if (this.window.width >= 768) {
        this.isActive = false;
      }
    },
    showMobilemenu() {
      this.active = !this.active;
    },
    logout(){

        auth.logout(loggedIn => {
            if (!loggedIn) {
            this.error = true
            } else {
                //window.location.replace("/");
                this.$forceUpdate();
                //this.$router.replace(this.$route.query.redirect || '/')
            }
        });
    }
  }
}
</script>

