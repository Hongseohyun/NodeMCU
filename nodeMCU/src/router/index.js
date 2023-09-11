import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/ListView.vue'),
	},
	{
		path: '/listDetail/:id',
		name: 'listDetail',
		component: () => import('@/views/ListDetail.vue'),
	},
];
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
