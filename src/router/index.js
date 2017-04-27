import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../views/App.js'
import Page from '../views/page.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: App
  }, {
    path: '/page',
    component: Page
  }]
})

export default router

