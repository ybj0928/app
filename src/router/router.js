import VueRouter from 'vue-router'

import root from '../components/root/root.vue'

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/index', component: root}
  ]
})

export default router