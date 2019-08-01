

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
import game_menu from '@/helpers/data/game'

export default [
	{
		path: ':game/single/:type', component: () => import(`./Single/List`),
		meta:{ play:'single' },
		beforeEnter(to, from, next) {
			if (vaildate(to)) next()
			else next('/game/sports/')
		}
	},
	{
		path: ':game/single/:type/:id', component: () => import(`./Single/Betting`),
		meta:{ play:'single' },
		beforeEnter(to, from, next) {
			if (vaildate(to)) next()
			else next('/game/sports/')
		}
	},
	{
		path: ':game/pass/:type', component: () => import(`./Pass/List`),
		meta:{ play:'pass' },
		beforeEnter(to, from, next) {
			if (vaildate(to)) next()
			else next('/game/sports/')
		}
	},
	{
		path: ':game/pass/:type/:id', component: () => import(`./Pass/Betting`),
		meta:{ play:'pass' },
		beforeEnter(to, from, next) {
			if (vaildate(to)) next()
			else next('/game/sports/')
		}
	},
	// { path: 'love', component: () => import(`./Single/List`) },
	// { path: 'love/:id', component: () => import(`./Single/Betting`) },
	// { path: 'soccer', component: () => import(`./Single/List`) },
	// { path: 'baseball', component: () => import(`./Single/List`) },
	// { path: 'baseketball', component: () => import(`./Single/List`) },
	// { path: 'tennis', component: () => import(`./Single/List`) },
	// { path: 'iceball', component: () => import(`./Single/List`) },
	// { path: 'rugby', component: () => import(`./Single/List`) },
	// { path: 'lottery', component: () => import(`./Single/List`) },
	// { path: 'game', component: () => import(`./Single/List`) },
	// { path: 'other', component: () => import(`./Single/List`) },
	{ path: '404', component: () => import(`./NotFinish`) },
	{ path: '*', redirect: 'love/single/today' }
]

import zipObject from "lodash/zipObject"
// 驗證路徑
function vaildate(to) {
	let { ...menu } = game_menu;
	let type = zipObject(['today', 'live', 'other'], [true, true, true])
	switch (true) {
		case (!menu[to.params.game]):
		case (!type[to.params.type]):
			return false
	}
	return true
}


