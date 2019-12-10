import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/news'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'news',
    component: News
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import(/* webpackChunkName: "item" */ '../views/item')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../views/calendar')
  },
  {
    path: '/meshdisk',
    name: 'meshdisk',
    component: () => import(/* webpackChunkName: "meshdisk" */ '../views/meshdisk')
  },
  {
    path: '/briefing',
    name: 'briefing',
    component: () => import(/* webpackChunkName: "briefing" */ '../views/briefing')
  }
]

const router = new VueRouter({
  routes
})

export default router
