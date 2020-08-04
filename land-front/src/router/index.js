import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ShowDemo from "../components/ShowDemo";
import Demo from "../components/TikDemo/Demo";
import Code from "../components/TikDemo/Code";

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
    },
    {
      path: '/demo/:id',
      name: 'demo',
      component: Demo
    },
    {
      path: '/code/:id',
      name: 'code',
      component: Code
    }
  ]
})
