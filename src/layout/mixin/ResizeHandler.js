import store from '@/store'
import router from '@/router'

const {
  body
} = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestory() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted () {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
    }
    this.checkClientModel()
  },
  methods: {
    // use $_ for mixins properties
    $_isMobile() {
      // getBoundingClientRect 用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler () {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          // 跳转首页
          if (router.currentRoute.name === 'Profile') {
            router.replace('/')
          }
        }
      }
    },
    checkClientModel () {
      //获取请求头中的userAgent
      const u = navigator.userAgent;
      //是否是android浏览器
      let isAndroid = u.indexOf('Android') > -1;
      //是否是ios浏览器
      let isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isAndroid || isIos) {
        store.dispatch('app/setClient', 'mobile')
      } else {
        store.dispatch('app/setClient', 'desktop')
      };
    }
  }
}
