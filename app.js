// 引入express模块
const app = require("express")()
// http启动node服务器
const http = require("http").Server(app)
// 响应读取模块
const express = require("express")
// node启动proxy代理
const {createProxyMiddleware}=require('http-proxy-middleware')
// 设置静态文件目录
app.use(express.static('./dist'))
// 请求地址,被代理到
app.use('/nodepdf/*',createProxyMiddleware({
    target:'http://static.cninfo.com.cn',
    changeOrigin:true,
    pathRewrite: { '^/nodepdf': '' },
}))

http.listen(8010, "10.0.24.11", function () {
    console.log("listening on 101.43.171.100:8010")
})