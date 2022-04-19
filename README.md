# vue-mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
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

创建完成后，可以通过命令打开图形化界面
vue ui

* pnpm i axios vant@latest-v2 -S

[vant](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/home) 安装后配置

自动按需引入组件

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