import Vue from 'vue'
import Router from 'vue-router'

import Logiin from '../components/Login.vue'
import About from '../components/About.vue'
import Index from '../components/Index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: 'index' },
    {
      path: '/login',
      name: 'login',
      component: Logiin
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
