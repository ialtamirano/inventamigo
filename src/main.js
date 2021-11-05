//import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import locationRoutes from './router/location-router'
import {createRouter, createWebHistory} from 'vue-router'  

import './assets/scss/main.scss'

import HomePage from './views/Home.vue'
import AboutPage from './views/About.vue'


const baseRoutes = [
  {
    path: '/',
    component: HomePage,//shsould be imported 
   
  },
  {
    path: '/about',
    component: AboutPage,//shsould be imported 
   
  }
  
]

const routes = baseRoutes.concat(locationRoutes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

createApp(App).use(router).mount('#app')