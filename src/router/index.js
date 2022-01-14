import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/signup',
		name: 'Signup',
		component: () => import('@/components/Signup.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;