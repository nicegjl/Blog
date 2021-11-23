import Vue from 'vue'
import Router from 'vue-router'

import Scene from '@/views/scene';
import Computer from '@/views/computer';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Scene',
			component: Scene,
      meta: {
        depth: 0
      },
		},
		{
			path: '/computer',
			name: 'Computer',
			component: Computer,
      meta: {
        depth: 1
      },
		}
	]
})
