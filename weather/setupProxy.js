const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
      // /api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      createProxyMiddleware("/api",{
        // 配置转发目标地址(能返回数据的服务器地址)
        target: 'https://www.mxnzp.com/',
        changeOrigin: true,
   //     去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        pathRewrite: {
            "^/api1": ""
        }
      }),
    )
  }