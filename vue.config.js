const webpack = require('webpack')
module.exports = {
    devServer: {
        // vue项目启动时的ip地址和端口
        host: 'localhost',
        port: 8080,
        proxy: {
            // 匹配所有以 /api 开头的url
            '/api': {
                // 请求的目标主机
                target: 'http://42.193.174.130:8080',
                changeOrigin: true,
                ws: true,
                // 这样重写会把路径中 /api 消去
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            'window.Quill': 'quill/dist/quill.js',
            'Quill': 'quill/dist/quill.js',
            '$': 'jquery',
            'jQuery': 'jquery'
        }])
    },
}