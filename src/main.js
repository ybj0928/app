
import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import router from '../src/router/router'

import '../lib/bootstrap/css/bootstrap.min.css'
import 'mint-ui/lib/style.css'
import '../lib/MUI/css/mui.min.css'
import '../lib/MUI/css/icons-extra.css'
import '../public/style/main.scss'

Vue.use(VueRouter)
Vue.use(MintUI)

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
})
