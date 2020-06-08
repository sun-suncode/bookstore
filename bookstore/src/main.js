import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'
import "font-awesome/css/font-awesome.css"
import './assets/css/reset.css'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueRouter)
Vue.use(VueAxios, axios) 

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
