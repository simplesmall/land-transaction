import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ShowDemo from "../components/TikDemo/ShowDemo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name:'ShowDemo',
      component: ShowDemo
    }
  ]
})
