const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'] // 需要gzip压缩的文件后缀
const webpack = require('webpack') //引入webpack库


module.exports = {
    outputDir: process.env.VUE_APP_OUTPUT_DIR || 'dist',
    publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
    configureWebpack: config => {
    if (process.env.VUE_APP_TEST === 'false') {
      config.externals = {
        "vue": "Vue",
        "vuex": "Vuex",
        "vue-router": "VueRouter",
      }
    }
    // 分離代碼避免vendor太肥
    config.optimization= {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 1
          },
          lodash: {
            test: /[\\/]node_modules[\\/]lodash[\\/]/,
            name: 'lodash',
            chunks: 'all',
            priority: 2
          }
        }
      }
    }
    // 別名
    config.resolve.alias = {
        '@/assets': __dirname + '/public/assets',
        '@/components': __dirname + '/src/components',
        '@/filter': __dirname + '/src/filter',
        '@/views': __dirname + '/src/views',
        '@/template': __dirname + `/src/views/${process.env.VUE_APP_STYLE}`,
        '@/helpers': __dirname + '/src/helpers',
        '@/lib': __dirname + '/src/lib',
    }

    // 分析工具
    if (process.env.VUE_APP_ANALY === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin(
          {
            analyzerMode: 'server',//server = 編譯就運行  disabled = 指定運行(正式)
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
          }
        )
      )
    }
    // 正式模式
    if (process.env.NODE_ENV === 'production') {
      // gzip
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
    }

    },
    chainWebpack: config => {
    config.plugin('ignore')
      .use(new webpack.IgnorePlugin(/^\.\/(?!zh-tw|en-gb)/, /moment[\/\\]locale$/));//忽略/moment/locale下的文件
    },
    transpileDependencies: [
        // can be string or regex
        'my-dep',
        /other-dep/
    ]
}

