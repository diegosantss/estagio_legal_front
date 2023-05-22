<template>
  <div class="container" :style="{ flexDirection: flexDirection }">
    <div class="left">
      
        <img src="../assets/Logo-IFPA.png" alt="Logo IFPA">
        <h1>Bem vindo(a) ao Sistema de Gerênciamento de Estágio do IFPA</h1>
        <div>{{text_home}}</div>
        <button class="button" @click="alternaElement">{{ contentButton }}</button>
      
    </div>
    
    <div class="right">

    <component :is="componente"/>
    

    </div>
  </div>
</template>

<script>

import TemplateLogin from '../components/template/TemplateLogin.vue';
import TemplateRegister from '../components/template/TemplateRegister.vue'

  export default {
    data: () => ({
      localSmallMenu: false,
      flexDirection: 'row',
      componente: 'TemplateLogin',
      contentButton: 'Cadastrar',
      text_home: 'Ainda não possui conta? Faça seu cadastro por aqui'
    }),
    methods:{
      alternaElement(){
        this.flexDirection = this.flexDirection === 'row'? 'row-reverse' : 'row';
        this.componente = this.componente === 'TemplateLogin' ? 'TemplateRegister':'TemplateLogin';
        this.contentButton = this.contentButton === 'Login' ? 'Cadastrar':'Login';
        this.text_home = this.text_home === 'Já possui conta? Faça seu login por aqui' ? 'Ainda não possui conta? Faça seu cadastro por aqui': 'Já possui conta? Faça seu login por aqui'
      }
    },
    components: {
      TemplateLogin,
      TemplateRegister
    }
  }
</script>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.homeLogo{
  position: fixed;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  height: 100vh;
  width: 100%;
}

.left {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #5CB85C;
  color: #fff;
  transition: all 0.5s ease-in-out;
}

.left h1 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
  font-family: 'Montserrat';
}

.left img {
  margin-top: 5rem;
  max-width: 50%;
}

.right {
  position: relative;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  transition: all 0.5s ease-in-out;
}



.button {
  margin-top: 2rem;
  padding: 0.6rem 1rem 0.6rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
}

.button:hover:hover {
  background-color: #3E8E41;
}

#h2{
padding-bottom: 5px;
text-align: center;
font-size: 18px;

}

.login-cadastro{
  flex-direction: row;
}
.cadastro{
  width: 302px;
height: 56px;

background: rgba(17, 17, 17, 0.25);

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}

.login{
  width: 302px;
height: 56px;

background: #111111;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
</style>
