const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
    assetsDir: 'assets',
    indexPath: 'index.html',
    filenameHashing: true,
    lintOnSave: process.env.NODE_ENV !== 'production',
    runtimeCompiler: true,
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8082,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/pdzhyl'
                    //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                    //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                }
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    },

    configureWebpack: config => {
        // 简单/基础配置，比如引入一个新插件
        // console.log(config);
        config.externals = {
            AMap: 'AMap'
        };
    },

    chainWebpack: config => {
        // 链式配置
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('utils', resolve('./src/utils'));
    },

    css: {
        loaderOptions: {
            css: {},
            sass: {
                prependData: `
                @import "@/assets/css/variables.scss";
                `
            },
            less: {}
        }
    }
};
