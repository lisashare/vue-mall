import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import store from '../store'
/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path(.*)',
      component: (resolve) => require(['@/views/redirect'], resolve)
    }]
  },
  {
    path: '',
    component: Layout,
    // redirect: 'index',
    children: [
      {
        path: '',
        component: Home,
        name: 'Home'
      },
      {
        path: 'goods/:id',
        name: 'Goods',
        component: () => import('@/views/goods/index.vue')
        // ,meta: {
        //   cache: true
        // }
      },
      {
        path: 'cart',
        component: () => import('@/views/cart/index.vue')
      },
      {
        path: 'order/:id',
        component: () => import('@/views/order/Detail.vue')
      },
      {
        path: 'mine',
        component: () => import('@/views/mine/index.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/mine/User.vue'),
            name: 'mine',
            meta: {
              title: 'mine'
            },
          },
          {
            path: 'attention/:type',
            component: () => import('@/views/mine/Attention.vue')
          },
          {
            path: 'setting',
            component: () => import('@/views/setting/index.vue'),
            children: [
              {
                path: '',
                component: () => import('@/views/setting/Home.vue')
              },
              {
                path: 'profile',
                name: 'Profile',
                component: () => import('@/views/setting/profile.vue')
              }
            ]
          },
          {
            path: 'gift',
            name: 'Gift',
            component: () => import('@/views/mine/Gift.vue')
          },
          {
            path: 'gift_management',
            name: 'GiftManagement',
            component: () => import('@/views/mine/GiftManagement.vue')
          },
          {
            path: 'treasure',
            name: 'Treasure',
            component: () => import('@/views/mine/Treasure.vue'),
            meta: {
              title: 'treasure'
            },
          },
          {
            path: 'collect',
            name: 'Collect',
            component: () => import('@/views/mine/Collect.vue')
          },
          {
            path: 'buy',
            name: 'Buy',
            component: () => import('@/views/mine/Buy.vue')
          },
          {
            path: 'release',
            name: 'Release',
            component: () => import('@/views/mine/Release.vue')
          },
          {
            path: 'sold',
            name: 'Sold',
            component: () => import('@/views/mine/Sold.vue')
          },
          {
            path: 'wallet',
            component: () => import('@/views/wallet/index.vue'),
            children: [{
              path: '',
              name: 'Overview',
              component: () => import('@/views/wallet/Overview.vue')
            },
            {
              path: 'bank',
              name: 'Bank',
              component: () => import('@/views/wallet/Bank.vue')
            }]
          }
        ]
      },
      {
        name: 'Login',
        path: 'login',
        component: () => import('@/views/member/Login.vue'),
        meta: {
          show: true,
          title: '??????'
        }
      },
      {
        path: 'register',
        component: () => import('@/views/member/Register.vue'),
        meta: {
          show: true,
          title: '??????'
        }
      },
      {
        path: 'forget',
        component: () => import('@/views/member/Forget.vue'),
        meta: {
          show: true,
          title: '????????????'
        }
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/agreement/About.vue')
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/message/index.vue')
      },
      {
        path: '/artist',
        name: 'Artist',
        component: () => import('@/views/artist/index.vue')
      },
      {
        path: '/join',
        name: 'Join',
        component: () => import('@/views/join/index.vue'),
        meta: {
          title: '????????????'
        }
      },
      {
        path: '/user/:id',
        name: 'User',
        component: () => import('@/views/user/index.vue')
      },
      {
        path: '/market',
        name: 'Market',
        component: () => import('@/views/market/index.vue')
      },
      {
        path: '/hotspot',
        name: 'Hotspot',
        component: () => import('@/views/hotspot/index.vue')
      },
      {
        path: '/app_download',
        component: () => import('@/views/appDownload/index.vue')
      },
      {
        path: '/question',
        component: () => import('@/views/agreement/Question.vue')
      },
      {
        path: '/policies',
        component: () => import('@/views/agreement/Policies.vue')
      },
      {
        path: '/terms',
        component: () => import('@/views/agreement/Terms.vue')
      },
      {
        path: '/sm',
        component: () => import('@/views/error/SystemsMaintenance.vue'),
        beforeEnter: (to, from, next) => {
          // ?????????????????????????????????????????? false ????????????????????? 404
          if (!store.state.app.systemsMaintenance) {
            next('/404')
          } else {
            next()
          }
        } 
      },
      {
        path: '/404',
        name: 'Page404',
        component: () => import('@/views/error/404.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    redirect: {
      name: 'Page404'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // ?????? savedPosition???????????? ??????/?????? ???????????????????????????????????????????????????
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth' // ????????????????????????????????????????????????????????????????????????
        }
      } else {
        return {
          y: 0
        }
      }
    }
  }
})

export default router
