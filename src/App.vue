<template>
  <div id="app">
    <Header/>
    <Menu/>
    
  </div>
</template>

<script>
import Menu from '@/components/template/Menu.vue';
import Header from '@/components/template/HeaderMain.vue';

export default {
  name: 'App',
  data: () => ({

  }),
  components: {
    Menu,
    Header,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>