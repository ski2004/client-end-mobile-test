import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/components', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  let componentName = [] ;
  // console.log(fileName)
  fileName.replace(/^\.\//, '').replace(/\.vue/, '').split('/').forEach( s =>{
    componentName.push(upperFirst(s))
  })
  console.log(componentName.join('-'))
  // 共用元件命名規則 = 資料夾 + '-' + 檔名
  Vue.component(componentName.join('-'), componentConfig.default)
})
