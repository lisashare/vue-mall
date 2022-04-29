import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './permission'

import '@/assets/styles/index.less'
// 引入全部样式
import 'vant/lib/index.less'
import anime from 'animejs/lib/anime.es.js'
import {
  Button, Icon, Tabbar, TabbarItem, Lazyload, Toast, Notify, Empty, Image as VanImage, Overlay, Uploader,  Grid, GridItem, Sidebar, SidebarItem, Stepper, Checkbox, CheckboxGroup, Dialog, Popover
} from 'vant'

Vue.use(Button).use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Toast).use(Notify).use(Empty).use(VanImage).use(Overlay).use(Uploader).use(Grid).use(GridItem).use(Sidebar).use(SidebarItem).use(Stepper).use(Checkbox).use(CheckboxGroup).use(Dialog).use(Popover);

Vue.prototype.$anime = anime

Vue.config.productionTip = false
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
