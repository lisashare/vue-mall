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


#### canvas 和 svg 的区别

svg 是矢量图
    基于xml描述的2d图形语言
    用js进行处理
    每个图形都是对象，属性发生变化，浏览器可以自动加载

特点：
  不依赖于分辨率
  支持事件处理
  适合带有大型渲染区域的应用程序，比如 谷歌地图
  不适合游戏应用

canvas 是位图
  基于js绘制2d图形
  逐像素渲染的，适合游戏
  在canvas中，图形是被绘制完成，如果位置发生变化，整个场景都会发生变化

特点：
  依赖于分辨率
  不支持事件处理
  文本渲染能力比较强
  可以存储成jpg，png的格式

https://github.com/alvarotrigo/fullPage.js

分页，移动端下拉刷新和桌面端分页不一定能共同响应一个分页，可能要分开写。

页面预览：权限账号授权？单独一个页面？


媒体查询其他引入方式

```html
<style media="(min-width: 768px) and (max-width: 992px)"></style>
<link href="" rel="stylesheet" media="(min-width: 768px)">
这里的小括号必须带
```

