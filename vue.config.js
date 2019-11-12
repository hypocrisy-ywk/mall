module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
                'common':'@/common'              
            }
        }
    },
    publicPath:'./',
    /* assetsDir:'./static' */
}