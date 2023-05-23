<template>
  <slot></slot>
  <form class="form_container" @submit="register">
  <div class="title_container">
    <p class="title">Faça o seu Registro</p>
  </div>
  <br>
<div class="group_input">
  <div class="input_container">
    <label class="input_label" for="name_field">Nome</label>
    <input placeholder="Nome" title="Input title"  type="text" class="input_field" id="name_field" v-model="registerUser.name">
  </div>
  <div class="input_container">
    <label class="input_label" for="cpf_field">Cpf</label>
    <input placeholder="Cpf" title="Input title"  type="text" class="input_field" id="cpf_field" v-model="registerUser.cpf">
  </div>
  <div class="input_container">
    <label class="input_label" for="matricula_field">Matrícula</label>
    <input placeholder="Matricula" title="Input title"  type="text" class="input_field" id="matricula_field" v-model="registerUser.matricula">
  </div>
  <div class="input_container">
    <label class="input_label" for="email_field">E-mail</label>
    <input placeholder="example@example.com" title="Input title" type="text" class="input_field" id="email_field" v-model="registerUser.email">
  </div>
  <div class="input_container">
    <label class="input_label" for="telefone_field">Telefone</label>
    <input placeholder="99 99999-9999" title="Input title" type="text" class="input_field" id="telefone_field" v-model="registerUser.telefone">
  </div>
  <div class="input_container">
    <label class="input_label" for="curso_field">Curso</label>
    <input placeholder="TADS" title="Input title" type="text" class="input_field" id="curso_field" v-model="registerUser.curso">
  </div>
  <div class="input_container">
    <label class="input_label" for="password_field">Senha</label>
    <input placeholder="Senha" title="Input title" type="password" class="input_field" id="password_field" v-model="registerUser.password">
  </div>
</div>
  <button title="Sign In" type="submit" class="sign-in_btn">
    <span>Registrar</span>
  </button>

  <p class="note">Terms of use &amp; Conditions</p>
</form>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      registerUser:{
        name:'',
        cpf:'',
        matricula:'',
        email:'',
        telefone:'',
        curso:'',
        password:''
      }
    }
  },
  methods: {
    register(event) {
      event.preventDefault();
      axios
        .post('http://localhost:3001/auth/register', this.registerUser)
        .then((response) => {
          if (response.status === 201) {
            localStorage.setItem("authToken", response.data.acessToken);
            this.$router.push('/contact');
          }
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style scoped>

.group_input{
  display: grid;
  grid-template-rows: 1fr repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  max-width: 60vw;
}
.form_container {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 50px 90px 20px 90px;
  background-color: #ffffff;
  box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
    0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
    0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  font-family: "Inter", sans-serif;

}

.logo_container {
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  background: linear-gradient(180deg, rgba(248, 248, 248, 0) 50%, #F8F8F888 100%);
  border: 1px solid #F7F7F8;
  filter: drop-shadow(0px 0.5px 0.5px #EFEFEF) drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  border-radius: 11px;
}

.title_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #212121;
}

.subtitle {
  font-size: 0.725rem;
  max-width: 80%;
  text-align: center;
  line-height: 1.1rem;
  color: #8B8E98
}

.input_container {
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.icon {
  width: 20px;
  position: absolute;
  z-index: 99;
  left: 12px;
  bottom: 9px;
}

.input_label {
  font-size: 0.75rem;
  color: #8B8E98;
  font-weight: 600;
}

.input_field {
  width: auto;
  height: 40px;
  padding: 0 0 0 10px;
  border-radius: 7px;
  outline: none;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef)
    drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #242424;
  background-color: transparent;
}

.sign-in_btn {
  width: 100%;
  height: 40px;
  border: 0;
  background: #115DFC;
  border-radius: 7px;
  outline: none;
  color: #ffffff;
  cursor: pointer;
}

.sign-in_ggl {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #ffffff;
  border-radius: 7px;
  outline: none;
  color: #242424;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef)
    drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  cursor: pointer;
}

.sign-in_apl {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #212121;
  border-radius: 7px;
  outline: none;
  color: #ffffff;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef)
    drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  cursor: pointer;
}

.separator {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: #8B8E98;
}

.separator .line {
  display: block;
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #e8e8e8;
}

.note {
  font-size: 0.75rem;
  color: #8B8E98;
  text-decoration: underline;
}

.logo-gov{

    width: 3vw;
    height: 2vh;
}
.icon-cpf{
    width: 2vw;
    height: 2vh;  
}
</style>


