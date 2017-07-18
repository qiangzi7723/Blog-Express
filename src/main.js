import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.http=axios
Vue.use(VueRouter)
const router=new VueRouter({routes})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
