<template>
  <div class="container">
    <div class="left">
      <img src="../assets/Logo-IFPA.png" alt="Logo IFPA">
      <h1>Bem vindo(a) ao Sistema de Gerênciamento de Estágio do IFPA</h1>
    </div>
    <div class="right">

      <TemplateLogin/>

    </div>
  </div>
</template>

<script>

import TemplateLogin from '../components/template/TemplateLogin.vue';

  export default {
    data: () => ({
      localSmallMenu: false
    }),
    components: {
      TemplateLogin
    }
  }
</script>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  justify-content: center;
  align-items: center;
  background-color: #5CB85C;
  color: #fff;
  padding-bottom: 200px;
  
  
}

.left h1 {
  font-size: 2rem;
  text-align: center;
  font-family: 'Montserrat';
}

.left img {
  max-width: 50%;
}

.right {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
}



.button {
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
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
