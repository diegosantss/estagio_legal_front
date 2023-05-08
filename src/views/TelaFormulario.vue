<template>
    <div id="app">
  
      <div class="header" :class="{'localSmallMenu':localSmallMenu}">
        <Header/>  
      </div>
      <div class="formularios" :class="{'localSmallMenu':localSmallMenu}">
        <FormAluno/>
        <FormConcedente/>
        <FormInfoEstagioVue/>
      </div>

    </div>
  </template>
  
  <script>
  import Menu from '../components/template/Menu.vue';
  import Header from '../components/template/HeaderMain.vue';
  import FormAluno from '../components/form/FormAluno.vue';
  import FormConcedente from '../components/form/FormConcedente.vue';
  import FormInfoEstagioVue from '../components/form/FormInfoEstagio.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'App',
    data: () => ({
      localSmallMenu: false
    }),
    components: {
      Menu,
      Header,
      FormAluno,
      FormConcedente,
      FormInfoEstagioVue
    },
    methods:{
      navigateToView() {
      window.location.href = "@/views/TelaLogin.vue";
     }
    }
  })
  </script>
  
  <style lang="scss" scoped>
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
    width: 100%;
  }
  
  .header{
    
  }
  
  .header.localSmallMenu{
    margin-left: -5vw;
  }
  
  .formularios.localSmallMenu{
    
    overflow-y: auto;
    transition: all .3s ease;
  }
  
  .formularios{
    width: auto;
    margin-left: 8vw;
    overflow-y: auto;
    transition: all .3s ease;
  }
  
  
  
  </style>