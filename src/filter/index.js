// import './jquery'
// import './jquery.marquee.min'
import Vue from 'vue'
const requireComponent = require.context(
    '@/filter', true, /\.js$/
)

requireComponent.keys().forEach(path => {
    if (path === './index.js') return;
      const componentConfig = requireComponent(path)
    let fileName = path.replace(/^\.\//, '').replace(/\.js/, '')

    Vue.filter(fileName, componentConfig.default[fileName] )
})
