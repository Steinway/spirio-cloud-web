const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  filenameHashing: false,
  css: {
    extract: false,
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/magnoliaAuthor/steinway.com-americas/.resources/steinway-main-webapp/resources/js/dist/spirio-cloud-web/'
    : '/'
    
})
