//import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import CommentBox from './components/CommentBox.vue'
import FileBox from './components/FileBox.vue'
import auth from './auth'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms'
//import VueConfirmDialog from 'vue-confirm-dialog'




import mitt from 'mitt';
const emitter = mitt();



import locationRoutes from './router/location-router'
import inboxRoutes from './router/inbox-router'
import partRoutes from './router/part-router'
import customerRoutes from './router/customer-router'
import basketRoutes from './router/basket-router'
import {createRouter, createWebHistory} from 'vue-router'  




import './assets/scss/main.scss'
import './assets/css/app.css'
import './assets/css/fontawesome-free-5.15.4-web/css/all.min.css'

import InboxPage from './views/inbox/InboxList.vue'
import AboutPage from './views/About.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'


function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const baseRoutes = [
  {
    path: '/',   
    component: InboxPage,//shsould be imported 
    beforeEnter: requireAuth,
   
  },
  {
    path: '/about',
    component: AboutPage,//shsould be imported 
   
  },
  {
    path: '/login',
    component: Login,//shsould be imported 
   
  },
  {
    path: '/signup',
    component: Signup,//shsould be imported 
   
  },
  { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  
]

const routes = baseRoutes.concat(locationRoutes).concat(inboxRoutes).concat(partRoutes).concat(basketRoutes).concat(customerRoutes);


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const VueDynamicForms = createDynamicForms()




const app = createApp(App).use(router).use(VueDynamicForms);

//app.use(VueConfirmDialog)


app.config.globalProperties.emitter = emitter;
app.component('CommentBox',CommentBox);
app.component('FileBox',FileBox);
//app.component('vue-confirm-dialog', VueConfirmDialog.default)
app.mount('#app')