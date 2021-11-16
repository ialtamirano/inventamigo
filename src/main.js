//import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import locationRoutes from './router/location-router'
import inboxRoutes from './router/inbox-router'
import {createRouter, createWebHistory} from 'vue-router'  
//import VueMoment from 'vue-moment'
//import moment from 'moment-timezone'


import './assets/scss/main.scss'
import './assets/css/app.css'
import './assets/css/fontawesome-free-5.15.4-web/css/all.min.css'

import InboxPage from './views/inbox/InboxList.vue'
import AboutPage from './views/About.vue'


const baseRoutes = [
  {
    path: '/',
    component: InboxPage,//shsould be imported 
   
  },
  {
    path: '/about',
    component: AboutPage,//shsould be imported 
   
  }
  
]

const routes = baseRoutes.concat(locationRoutes).concat(inboxRoutes);


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



createApp(App).use(router).mount('#app')