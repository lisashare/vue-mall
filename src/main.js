import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './permission'

import '@/assets/styles/index.less'
// 引入全部样式
import 'vant/lib/index.less';

import {
  Button, Icon, Tabbar, TabbarItem, Lazyload, Toast, Empty, Image as VanImage, Overlay, Uploader,  Grid, GridItem   
} from 'vant'

Vue.use(Button).use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Toast).use(Empty).use(VanImage).use(Overlay).use(Uploader).use(Grid).use(GridItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
