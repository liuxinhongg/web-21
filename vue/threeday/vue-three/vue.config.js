module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://192.168.0.7:3030",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "http://192.168.0.7:3030"
                }
            }
        }
    }
}