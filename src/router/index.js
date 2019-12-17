import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/news'
import leftBar from "../components/left-bar.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'news',
    components:{
      default: News,
      leftBar
    },
  },
  {
    path: '/item',
    name: 'item',
    components:{
      default: () => import(/* webpackChunkName: "item" */ '../views/item'),
      leftBar
    },
    redirect:"/item/my",
    children:[
      {
        path: '/item/my',
        name: 'itemmy',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/my/index.vue'),
        redirect:"/item/my/directed",
        children:[
          {
            path: '/item/my/directed',
            component: () => import(/* webpackChunkName: "item" */ '../views/item/children/my/directed.vue'),
          },
          {
            path: '/item/my/delegated',
            component: () => import(/* webpackChunkName: "item" */ '../views/item/children/my/delegated.vue'),
          },
          {
            path: '/item/my/following',
            component: () => import(/* webpackChunkName: "item" */ '../views/item/children/my/following.vue'),
          },
          {
            path: '/item/my/created',
            component: () => import(/* webpackChunkName: "item" */ '../views/item/children/my/created.vue'),
          },
        ]
      },
      {
        path: '/item/gongshi',
        name: 'itemgongshi',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/gongshi/index.vue'),
        redirect:"/item/gongshi/mingxi",
        children:[
          {
            path: '/item/gongshi/mingxi',
            component: () => import(/* webpackChunkName: "item" */ '../views/item/children/gongshi/mingxi.vue'),
          },
          {
            path: '/item/gongshi/huizong',
            component: () => import(/* webpackChunkName: "item" */ '../views/item/children/gongshi/huizong.vue'),
          },
          {
            path: '/item/gongshi/tongji',
            component: () => import(/* webpackChunkName: "item" */ '../views/item/children/gongshi/tongji.vue'),
          }
        ]
      },
      {
        path: '/item/tongji',
        name: 'itemtongji',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/tongji.vue'),
      },
      {
        path: '/item/time',
        name: 'itemtime',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/time.vue'),
      },
      {
        path: '/item/renyuan',
        name: 'itemrenyuan',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/renyuan.vue'),
      },
      {
        path: '/item/rili',
        name: 'itemrili',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/rili.vue'),
      },
      {
        path: '/item/shili',
        name: 'itemshili',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/shili.vue'),
      },
      {
        path: '/item/peizhi',
        name: 'itempeizhi',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/peizhi.vue'),
      },
      {
        path: '/item/huishou',
        name: 'itemhuishou',
        component: () => import(/* webpackChunkName: "item" */ '../views/item/children/huishou.vue'),
      }
    ]
  },
  {
    path: '/calendar',
    name: 'calendar',
    //component: () => import(/* webpackChunkName: "calendar" */ '../views/calendar'),
    components:{
      default: () => import(/* webpackChunkName: "calendar" */ '../views/calendar'),
      leftBar
    },
  },
  {
    path: '/meshdisk',
    name: 'meshdisk',
    //component: () => import(/* webpackChunkName: "meshdisk" */ '../views/meshdisk'),
    components:{
      default: () => import(/* webpackChunkName: "meshdisk" */ '../views/meshdisk'),
      leftBar
    },
  },
  {
    path: '/briefing',
    name: 'briefing',
    //component: () => import(/* webpackChunkName: "briefing" */ '../views/briefing'),
    components:{
      default: () => import(/* webpackChunkName: "briefing" */ '../views/briefing'),
      leftBar
    },
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
