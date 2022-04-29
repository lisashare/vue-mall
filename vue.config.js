
'use strict'
const path = require('path')
// const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const name = process.env.VUE_APP_TITLE || 'TITLE' // 网页标题
// const port = process.env.port || process.env.npm_config_port || 1088 // 端口

module.exports = {
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.xxx.com/admin/，则设置 baseUrl 为 /admin/。如果静态文件 需要放置在云服务上也尝试更改 baseUrl
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  // outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false,
  // lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  pwa: {
    name: name,
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    // appleMobileWebAppCapable: 'yes',
    // appleMobileWebAppStatusBarStyle: 'black',

    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // }
  },
  // webpack-dev-server 相关配置
  // devServer: {
  //   host: '0.0.0.0',
  //   port: port,
  //   open: true,
  //   proxy: {
  //     [process.env.VUE_APP_BASE_API]: {
  //       target: 'http://www.xxx.com',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         ['^' + process.env.VUE_APP_BASE_API]: ''
  //       }
  //     }
  //   },
  //   disableHostCheck: true
  // },
  // css: {
  //   // modules: true, // 是否开启支持'foo.module.css'样式
  //   // 提取 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
  //   extract: true, // 开启后，不能时时监听样式变更
  //   sourceMap: false // 是否在构建样式地图，false将提高构建速度
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         hack: `true: @import 'theme.less'`
  //       }
  //     }
  //   }
  // },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    /* plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ], */

    // 关闭 webpack 的性能提示
    // performance: {
    //   hints:false
    // },
    // 或者
    // 警告 webpack 的性能提示
    performance: {
      hints:'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 160000000,
      // 生成文件的最大体积
      maxAssetSize: 40000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  },
   chainWebpack(config) {
   /*// set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end() */
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                vant: {
                  name: 'chunk-vant', // split vant into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?vant(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
          // ,{
          //   from: path.resolve(__dirname, './public/robots.txt'),//防爬虫文件
          //   to:'./',//到根目录下
          // }
        }
      ) 
  }
}
