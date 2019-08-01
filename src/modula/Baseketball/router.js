

// //auto router
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

// const requireComponent = require.context(
//   './', true, /\.vue$/
// )
// let list = [] ;
// requireComponent.keys().forEach(path => {
//   const componentpath = upperFirst(
//     camelCase(path.replace(/^\.\//, '').replace(/\.vue/, ''))
//   )
//   list.push({path:componentpath , component: (resovle) => import(`${path}`).then(resovle)})
// })
// list.push({ path: '*', redirect: 'NotFinish' });

// //模組路徑
export default [
  { path: 'NotFinish', component: () => import(`./NotFinish`) },
  { path: '*', redirect: 'NotFinish' }
]



