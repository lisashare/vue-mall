module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
  // ,plugins: [
  //   ['import', {
  //     libraryName: 'vant',
  //     libraryDirectory: 'es',
  //     style: true
  //   }, 'vant']
  // ]
  ,"plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
