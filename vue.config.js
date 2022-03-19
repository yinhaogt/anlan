module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    const imagesRule = config.module.rule('images')
    imagesRule
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
}
