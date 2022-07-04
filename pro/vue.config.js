const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://43.138.133.170:6688',
        pathRewrite: {
          '^/api': ''  
      }
      },
    },
  }
})
