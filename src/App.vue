<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar v-if="mostrarsidebar" />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Sidebar from './components/template/Sidebar.vue';

const route = useRoute();
const mostrarSidebar = route.name !== '/';

</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #3E8E41;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>