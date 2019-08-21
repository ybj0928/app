import VueRouter from 'vue-router'

import root from '../components/root/root.vue'

import home from '../components/home/home.vue'
import newsList from '../components/home/newsList.vue'
import newsDetail from '../components/home/newsDetail.vue'
import photoShare from '../components/home/photoShare.vue'
import photoDetails from '../components/home/photoDetails.vue'

import member from '../components/member/member.vue'

import car from '../components/car/car.vue'

import search from '../components/search/search.vue'

const router = new VueRouter({
  linkActiveClass: 'mui-active',
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      component: root,
      children: [
        {path: '', redirect: 'homePage'},
        {path: 'homePage', component: home},
        {path: 'newsList', component: newsList},
        {path: 'newsDetail/:id', component: newsDetail},
        {path: 'photoShare', component: photoShare},
        {path: 'photoDetails/:id', component: photoDetails}
      ]
    },
    {
      path: '/car',
      component: root,
      children: [
        {path: '', redirect: 'carPage'},
        {path: 'carPage', component: car}
      ]
    },
    {
      path: '/member',
      component: root,
      children: [
        {path: '', redirect: 'memberPage'},
        {path: 'memberPage', component: member}
      ]
    },
    {
      path: '/search',
      component: root,
      children: [
        {path: '', redirect: 'searchPage'},
        {path: 'searchPage', component: search}
      ]
    }
  ]
})

export default router