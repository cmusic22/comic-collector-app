import Router from 'vue-router'

import ComicForm from '@/components/ComicForm'
import ComicTable from '@/components/ComicTable'
import About from '@/components/About'

export default new Router({
	routes: [
	{
		path: '/',
		component: ComicForm
	},
	{
		path: '/comic-list',
		component: ComicTable
	},
	{
		path: '/about',
		component: About
	}
	]
})