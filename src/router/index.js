import { createRouter, createWebHistory } from 'vue-router'
import TelaLogin from '../views/TelaLogin.vue';
import eventBus from '../barramento';



const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: TelaLogin,
			component: TelaLogin,
			beforeEnter: (to, from, next) => {
				console.log('teste')
				eventBus.toggleRenderizaSidebar();
				next();
			},
		},
		{
			path: '/formularioObrigatorio',
			component: () => import('../views/TelaFormulario.vue')
		}
	],
})

export default router