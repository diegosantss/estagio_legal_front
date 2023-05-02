<template>
  <div id="app">
    <Header/>
    <Menu class="menu"/>
    
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat';
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  display: flex;
}
.teste{
  justify-content: center;
  align-items: center;
  width:100%;
}

</style>