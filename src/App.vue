<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar v-if="mostrarSidebar"/>

		

		<!-- Content -->
		<router-view />
	</div>

</template>

<script>
import eventBus from './barramento';

import Sidebar from './components/template/Sidebar.vue';
export default{
	data(){
		return{
			mostrarSidebar:false,
		}
	},
	methods:{
		// sideRender(){
		// 	if(this.$route.fullPath !== '/'){
		// 		console.log("testendo render")
		// 		this.mostrarSidebar = true;
		// 	}
			
		// }
	},
	watch: {
    $route() {
      		if(this.$route.fullPath !== '/'){
				console.log("testendo render")
				this.mostrarSidebar = true;
			}else{
				this.mostrarSidebar = false;
			}
    	},
  	},
	components:{
		Sidebar,
	},
};
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