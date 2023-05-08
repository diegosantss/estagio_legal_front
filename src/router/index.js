import { createRouter, createWebHistory } from 'vue-router'
import TelaLogin from '../views/TelaLogin.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: TelaLogin
		},
		{
			path: '/formularioObrigatorio',
			component: () => import('../views/TelaFormulario.vue')
		},
	],
})

export default router