
import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import router from '../src/router/router'
import vueResource from 'vue-resource'
import filters from './filter/filter.js'
import VuePreview from 'vue-preview'
import store from './store'

import '../lib/bootstrap/css/bootstrap.min.css'
import 'mint-ui/lib/style.css'
import '../lib/MUI/css/mui.min.css'
import '../lib/MUI/css/icons-extra.css'
import '../public/style/main.scss'

Object.keys(filters).forEach(key => {Vue.filter(key, filters[key])})

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(vueResource)
Vue.use(VuePreview)

Vue.http.options.root = 'http://www.liulongbin.top:3005'
// Vue.http.headers.common['Authorization'] = 'APPCODE bc271098d2af4a218f5712010affaa0f'
Vue.http.options.emulateJSON = true

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router,
  store
})
