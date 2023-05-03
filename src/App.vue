<template>
  <div id="app">
    <Header/>
    <FormAluno class="formAluno"/>
    <Menu class="menu"/>
    <FormConcedente/>
    <!-- <FormInfoEstagioVue/> -->
  </div>
</template>

<script>
import Menu from '@/components/template/Menu.vue';
import Header from '@/components/template/HeaderMain.vue';
import FormAluno from '@/components/form/FormAluno.vue';
import FormConcedente from './components/form/FormConcedente.vue';
// import FormInfoEstagioVue from './components/form/FormInfoEstagio.vue';

export default {
  name: 'App',
  data: () => ({

  }),
  components: {
    Menu,
    Header,
    FormAluno,
    FormConcedente,
    // FormInfoEstagioVue
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
  background-color: #F8F9FC;
  flex-direction: column;
  height: 100vh;

}


</style>