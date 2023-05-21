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
		{
			path: '/formularioRegister',
			component: () => import('../components/template/TemplateRegister.vue')
		},
		{
			path: '/formularioLogin',
			component: () => import('../components/template/TemplateLogin.vue')
		}
	],
})

export default router