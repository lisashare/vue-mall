import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
        path: 'goods',
        name: 'Goods',
        component: () => import('@/views/goods/index.vue'),
        meta: {
          cache: true
        }
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
              path: 'overview',
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
          title: '登录'
        }
      },
      {
        path: 'register',
        component: () => import('@/views/member/Register.vue'),
        meta: {
          show: true,
          title: '注册'
        }
      },
      {
        path: 'forget',
        component: () => import('@/views/member/Forget.vue'),
        meta: {
          show: true,
          title: '忘记密码'
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
        path: '/artist',
        name: 'Artist',
        component: () => import('@/views/artist/index.vue')
      },
      {
        path: '/join',
        name: 'Join',
        component: () => import('@/views/join/index.vue'),
        meta: {
          title: '加入我们'
        }
      },
      {
        path: '/user',
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
      return savedPosition // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth' // 如果你的浏览器支持滚动行为，你可以让它变得更流畅
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
