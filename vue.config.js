module.exports = {
  configureWebpack: {
    externals: {
      lodash: {
        commonjs: 'lodash',
        amd: 'lodash',
        root: '_' // indicates global variable
      }
    }
  }
}