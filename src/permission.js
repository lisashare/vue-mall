import router from './router'
// import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
// import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false })

// const whiteList = ['/login', '/register', 'auth-redirect', '/mine']
const toLogin = ['/mine']

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  // document.title = getPageTitle(to.meta.title)


  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
      NProgress.done()
    }
  } else {
    // if (toLogin.indexOf(to.path) !== -1) {
      // next(`/login?redirect=${to.fullPath}`)
    // } else {
      next()
    // }
    NProgress.done()
  }

   /* if(hasToken) {
    if(to.path === '/login') {
      next({ path: '/' })
      NProgress.down()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        // try {
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // const { roles } = await store.dispatch('user/getInfo')
          // await store.dispatch('user/getInfo')

          // // generate accessible routes map based on roles
          // // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // const accessRoutes = await store.dispatch('permission/generateRoutes')
          // // dynamically add accessible routes
          // router.addRoutes(accessRoutes)

          // // hack method to ensure that addRoutes is complete
          // // set the replace: true, so the navigation will not leave a history record
          // next({ ...to, replace: true })
        // } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          alert(error || 'Has Error')
          next(`/?require_signin=true&redirect=${to.path}`)
          NProgress.done()
        // }
      }
    }
  } else {
    // has no token
    // if (whiteList.indexOf(to.path) !== -1) {
    if (whiteList.indexOf(to.path) === -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/?require_signin=true&redirect=${to.path}`)
      // https://www.masterclass.com/?require_signin=true&next_page=/account/edit
      NProgress.done()
    }
  }
  */
  
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
