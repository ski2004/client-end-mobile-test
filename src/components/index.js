import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/components', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  let componentName = [] ;
  fileName.replace(/^\.\//, '').replace(/\.vue/, '').split('/').forEach( s =>{
    componentName.push(upperFirst(camelCase(s)))
  })

  Vue.component(componentName.join('-'), () => componentConfig.default || componentConfig)
})
