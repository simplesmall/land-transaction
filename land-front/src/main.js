// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios  from 'axios'
Vue.prototype.$axios = axios

axios.defaults.baseURL = '/api'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import store from "./store/store";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})

