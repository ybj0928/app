import VueRouter from 'vue-router'

import root from '../components/root/root.vue'
import home from '../components/home/home.vue'
import member from '../components/member/member.vue'
import car from '../components/car/car.vue'
import search from '../components/search/search.vue'

const router = new VueRouter({
  linkActiveClass: 'mui-active',
  routes: [
    {path: '/', redirect: '/index'},
    {
      path: '/index',
      component: root,
      children: [
        {path: '', redirect: 'home'},
        {path: 'home', component: home},
        {path: 'member', component: member},
        {path: 'car', component: car},
        {path: 'search', component: search},
      ]
    }
  ]
})

export default router