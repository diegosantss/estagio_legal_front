<template>
  <div id="app">
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/template/Menu.vue';

export default {
  name: 'App',
  data: () => ({
    
  }),
  components: {
    Menu
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
