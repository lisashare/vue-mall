import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './permission'

// 引入全部样式
import anime from 'animejs/lib/anime.es.js'
import 'vant/lib/index.css'
import Vant from 'vant'
import '@vant/touch-emulator'

import '@/assets/styles/index.less'

// 分页组价
import Pagination from '@/components/Pagination'

Vue.component('Pagination', Pagination)

// import 'element-ui/lib/theme-chalk/colorpicker.css'
import { ColorPicker, input, pagination } from 'element-ui'
Vue.use(ColorPicker).use(input).use(pagination)

Vue.use(Vant);
Vue.prototype.$anime = anime



Vue.config.productionTip = false
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
