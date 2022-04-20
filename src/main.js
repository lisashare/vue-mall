import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/styles/index.less'
// 引入全部样式
import 'vant/lib/index.less';

import {
  Button, Tabbar, TabbarItem, Lazyload
} from 'vant'

Vue.use(Button).use(Tabbar).use(TabbarItem).use(Lazyload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
