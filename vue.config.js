const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'] // 需要gzip压缩的文件后缀
const webpack = require('webpack') //引入webpack库


module.exports = {
  outputDir: process.env.VUE_APP_OUTPUT_DIR || 'dist',
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
  configureWebpack: config => {
    // 單元測試需用內部的vue
    if (process.env.VUE_APP_TEST === 'false') {
      config.externals = {
        "vue": "Vue",
        "vuex": "Vuex",
        "vue-router": "VueRouter",
      }
    }
    // 別名
    config.resolve.alias = {
      '@/assets': __dirname + '/public/assets',
      '@/components': __dirname + '/src/components',
      '@/filter': __dirname + '/src/filter',
      '@/views': __dirname + '/src/views',
      '@/view_style': __dirname + `/src/views/${process.env.VUE_APP_STYLE}`,
      '@/helpers': __dirname + '/src/helpers',
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
            openAnalyzer: false,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
          }
        )
      )
    }

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
  }
}

