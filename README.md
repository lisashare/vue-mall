# vue-mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for development
```
npm run build:dev
```

### Compiles and minifies for test
```
npm run build:stage
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目创建

* 全局安装 Vue Cli
npm install -g @vue/cli

创建一个项目
vue create vue-mall

选择配置步骤详见[博客](https://www.cnblogs.com/lisaShare/p/16119149.html)
> Vant 使用了 Less 对样式进行预处理，所以我们下载预处理器的时候也选择 Less

创建完成后，可以通过命令打开图形化界面
vue ui

* pnpm i axios vant@latest-v2 -S

[vant](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/home) 安装后配置

自动按需引入组件 (推荐)

babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。
```js
// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};

import { Button } from 'vant';
Vue.use(Button);
```
导入所有组件

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```
[vant](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei) 桌面端适配

# 安装模块
npm i @vant/touch-emulator -S

引入模块后自动生效
import '@vant/touch-emulator';

* 打包环境配置

* 关联 git

```bash
…or create a new repository on the command line
echo "# vue-mall" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:lisashare/vue-mall.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin git@github.com:lisashare/vue-mall.git
git branch -M main
git push -u origin main
```

[小进度条插件 nprogress](https://www.npmjs.com/package/nprogress)

js-cookie

配置路由 & utils工具

响应式设备判断 & layout 布局，修改路由

npm install swiper@5 vue-awesome-swiper@4.1.1 --save
[vue-awesime-swiper](https://v1.github.surmon.me/vue-awesome-swiper)

[animejs](https://animejs.com/)

[clipboard](https://clipboardjs.com)

qrcode

moment

### 开发中的问题记录

#### vant tabbar 

mine 路由的子路由，点击tab不能直接跳转到/mine

#### 在vue文件中使用<van-image>引用本地图片时，不能直接使用地址，应该在地址前面用require包上：
:src="require(url)"

```html
<van-image :src="require('@/common/imgs/more.png')" />
```
#### 配置 index.html 标题

```js
<title><%= htmlWebpackPlugin.options.title %></title>

vue.config.js
chainWebpack: config => {
  config
  .plugin('html')
  .tap(args => {
      args[0].title = '你的标题名字'
      return args
  })},
```

```js
<title><%= webpackConfig.name %></title>

vue.config.js
module.exports = {
  // ...
  configureWebpack: {
    name: '你的标题名字'
  }
}
```
* 单独将图片放置在CDN
```js
module.exports = {
  // ...
  chainWebpack: config => {
    config
      .module
      .rule('images')
      .test(/\.(png|jpe?g|gif)$/i)
      .use('url-loader') 
      // 1. url-loader本身的作用是将图片引用方式转换为base64的内联引用方式
      // 2. 通过配置limit, 可使文件大小小于此limit值(单位为byte)的文件转换为base64格式, 大于此limit的, 会执行options中的fallback配置项插件
      // 3. fallback默认值为file-loader, 而且url-loader的options配置项也会被传递给file-loader
      .loader('url-loader')
      .options({
        limit: 100,
        // 如果项目的需求是只在生产环境下使用cdn, 测试和开发环境下使用相对路径
        // publicPath: process.env.NODE_ENV === 'production' ? 'https://oss.xx.com/img' : './',
        publicPath: 'http://oss.xxx.com/img',
        // 将图片打包到dist/img文件夹下, 不配置则打包到dist文件夹下
        outputPath: 'img',
        // 配置打包后图片文件名
        name: '[name].[ext]'
      })
      .end()
  }
}

```

#### 全局变量 less 文件引入问题

```
pnpm install style-resources-loader vue-cli-plugin-style-resources-loader -D

vue.config.js
module.exports = {
  // ...
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/assets/styles/_base.less')] // 引入全局样式变量
    }
  }
}
```

#### 海报参考文档

https://ethan.pub/?p=846
https://www.w3cschool.cn/article/37137920.html

#### 倒计时

距离开售 19:25:00
https://www.jianshu.com/p/280a709e7121

#### 登录手机号前缀
https://www.jianshu.com/p/a6497ed645fe

#### others

一个项目有两个请求域名的话，可以将request.js多配置一套

http://www.geetest.com/  极验验证

位置信息，图片切换
https://github.com/yeild/jigsaw



https://github.com/alvarotrigo/fullPage.js

分页，移动端下拉刷新和桌面端分页不一定能共同响应一个分页，可能要分开写。

页面预览：权限账号授权？单独一个页面？


媒体查询其他引入方式

```html
<style media="(min-width: 768px) and (max-width: 992px)"></style>
<link href="" rel="stylesheet" media="(min-width: 768px)">
这里的小括号必须带
```

### 自适应布局

布局特点：不同设备对应不同的html局部自适应

不同设备用不同的页面或局部是伸缩

设计思路：判断设备的类型或控制局部的变化

```js
var browserRedirect = () => {
  let userAgent = navigator.userAgent.toLowerCase()
  let device = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/;
  if (device.test(userAgent)) {
    // 跳转移动端页面
    window.location.href = '/'
  } else {
    // 跳转PC端页面
    window.localtion.href = '/'
  }
}
```

### 前端js实现并发控制

```js

async function asyncPool(poolLimit, array, iteratorFn) {
  // 存储所有的异步任务
  const ret = []
  // 存储正在执行的异步任务
  const executing = []
  for (const item of array) {
    // 调用iteratorFn函数创建异步任务
    const p = Promise.resolve().then(() => iteratorFn(item))
    // 保存新的异步任务
    ret.push(p)
    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // * 当任务完成后，从正在执行的任务数组中移除已经完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      // 保存正在执行的异步任务
      executing.push(e)
      if(executing.length >= poolLimit) {
        // 加trick
        await Promise.race(execting.map(function (item) {
          return item.catch(function (err) {
            return err;
          })
        }))
      }
    }
    // trick，对err进行处理
    reeturn Promise.all(ret.map(function (item) {
      return item.catch(function (err) {
        return err;
      })
    }))
  }
}

const timeout = i => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(i)
    if (i === 2000) {
      reject({ error: i })
    } else {
      resolve({ success: i })
    }
  })
})
asyncPool(4, [1000, 1000, 1000, 1000, 1000, 1000, 2000, 1000], timeout).then(res => {
  console.log("res", res)
})
```

### localStorage 存储的键值采用什么字符编码？

localStorage 存储的键和值始终采用 UTF-16 DOMString 格式，每个字符使用两个字节。与对象一样，整数键将自动转换为字符串。
> MDN这里描述的没有问题，也有问题，因为UTF-16，每个字符使用两个字节，是有前提条件的，就是码点小于0xFFFF(65535)， 大于这个码点的是四个字节。

### 5M 的单位

5M 单位就是字符串的长度，而不是字符数

### localStorage 键占不占存储空间

占空间

```js
const charTxt = 'a'
let count = (2.5 * 1024 * 1024)
let content = new Array(count).fill(charTxt).join('') // + 0.1 err
const key = new Array(count).fill(charTxt).join('')
localStorage.clear()
try {
  console.time('setItem')
  localStorage.setItem(key, content)
  console.timeEnd('setItem')
} catch (err) {
  console.log('err code', err.code)
  console.log('err message', err.message)[]
}
```

* localStorage 的键的数量，对写和读性能的影响

键的数量对读取性能有影响，但是不大。
值的大小对性能影响更大，不建议保存大的数据

```js

const charTxt = "a";
const count = 5 * 1024 * 1024  - 1
const val1 = new Array(count).fill(charTxt).join("");
 
setTimeout(() => {
  localStorage.clear();
  console.time("save_cost_1");
  localStorage.setItem("a", val1);
  console.timeEnd("save_cost_1");
}, 1000)
 
setTimeout(() => {
  localStorage.clear();
  console.time("save_cost_2");
  localStorage.setItem("a", "a");
  console.timeEnd("save_cost_2");
}, 1000)

// save_cost_1: 53.35498046875 ms
// save_cost_2: 0.0361328125 ms
```
* 写个方法统计一个 localStorage 已使用空间

```js
const sieOfLS = () => {
  console.log(Object.entries(localStorage), Object.entries(localStorage).map(v => v.join('')), Object.entries(localStorage).map(v => v.join('')).join('').length)
  return Object.entries(localStorage).map(v => v.join('')).join('').length
}
localStorage.clear()
localStorage.setItem("key1", 1)
localStorage.setItem("key11", 11)
console.log("sizes", sieOfLS())
```

### Vue项目的性能优化

* v-for key

设置key值：更快定位数据与diff

用户操作了，数据操作了 -> 派发通知 -> 打补丁patch(oldVnode, Vnode)

* 模块化、组件化

封装具有高度复用性的模块

拆分高度复用性的组件

组件可配置性强

* 路由懒加载

首屏加快渲染

* productionSourceMap

false
生成map文件、定位源码

* productionGzip

true
启用gzip压缩功能，打包体积更小

* keep-alive 

缓存不活跃的组件

* 插件CDN

vue-router、axios等插件可以使用CDN静态引入到HTML中

<link rel="stylesheet" href="">

configureWebpack: { externals: { 'vue': 'Vue', 'vue-router': 'VueRouter', 'vuex': 'Vuex', 'axios': 'axios', 'elemeng-ui': 'ELEMENT'} }

* 图片CDN、图片懒加载、使用CSS图标

图片使用远程CDN地址

图标使用CSS图标

* 组件按需导入

一个库中，需要什么导什么，避免全部导入

* 不需要响应的数据可以定义在实例上

不要将所有的数据都放在data中，data中的数据都会增加getter和setter，会收集对应的 watcher，这样就会降低性能。

### SPA单页面应用：计算首屏加载时间和首屏加载速度慢怎么解决？
https://www.bilibili.com/video/BV1R3411j765/?spm_id_from=autoNext

1. 什么是首屏加载
首屏加载时间，指的是浏览器从响应用户输入网址，到首屏内容渲染完成的时间，
此时整个网页不一定全部渲染完成，但需要展示当前视窗需要的内容，首屏加载是用户体验的重要环节。

计算首屏加载时间 times = (performance.timing.domComplete - performance.timing.navigationStart) / 1000

performance.getEntries() // 每个资源加载时间

2. 解决方案

 1. 减少入口文件体积 
 常用的手段是路由懒加载，只有在解析路由时才会加载组件

 ```js
 const routes = [
   {
     path: "Blogs",
     name: "ShowBlogs",
     component: () => import("./components/ShowBlogs.js")
   }
 ]
 ```
 2. 静态资源本地缓存
  后端返回资源：采用HTTP缓存
  前端合理利用 localStorage
  CDN 静态资源缓存

 3. UI框架按需加载
  在日常使用的UI框架，例如：element-ui,antd,我们要按需引入
  import { Button } from 'antd

 4. 避免组件重复打包
  假设A.js文件是一个常用的库，现在有多个路由使用A.js文件，这样就造成重复下载
  解决方案：在webpack的config文件中，修改CommonsChunkPlugin的配置minChunk: 2
  minChunks为2会，把使用2次及以上的包抽离出来，放进公共依赖文件中，避免了重复加载组件

 5. 图片资源压缩
  图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素
  对于所有的图片资源，我们可以进行适当的压缩
  对于页面上使用的icon，可以使用在线字体图标，或者雪碧图，将众多的小图标合并到一张图上，用以减轻http请求的压力
 
 6. 开启GZip压缩
  拆完包之后，我们再用gzip做一下压缩，安装compression-webpack-plugin
  webpack中配置压缩

  ```js
  const CompressionWebpackPlugin = require('compression-webpack-plugin‘)
  const productionGzipExtensions = ['js', 'css'] // if(config.build.productionGzip) {} config.build.productionGzipExtensions
  // 配置compression-webpack=plugin压缩
  new CompressionWebpackPlugin({
    algorithm: 'gzip',
    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    threshold: 10240,
    minRatio: 0.8
  })
  ```
  
### 什么是进程，线程

进程是系统进行资源分配和调度的一个独立单位，一个进程内包含多个线程。

**js 的主线程是单线程的**

EventLoop 事件触发线程，eventloop 轮询处理线程

js 引擎线程执行后，立即执行的任务称为微任务

清空微任务队列，微任务执行完会执行GUI渲染

再继续执行宏任务

* 长列表优化

```html
<body>
  <ul id="container"></ul>
  <script>
    let total = 10000;
    // 新版本浏览器的优化，当js执行完成后会一并插入到页面中
    let timer = Date.now()
    for (let i = 0; i< total; i++) {
      let li = document.createElement('li')
      li.innerHTML = i
      container.appendChild(li)
    }
    console.log(Date.new() - timer) // 算的是js执行的时间
    setTimeout(() => {
      console.log(Date.new() - timer)
    }, 0)
    // 分片 我们可以根据数据大小划分，每次加载固定的数量
  </script>
</body>
```
