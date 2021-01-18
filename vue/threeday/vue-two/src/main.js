// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import * as echarts from 'echarts'
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
// axios 拦截请求 Bearer token
axios.interceptors.request.use(config=>{
  console.log(config)
  if(store.state.token){
    // console.log(11)
    config.headers['Authorization'] = `Bearer ${store.state.token}`
  }
  return config;
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
