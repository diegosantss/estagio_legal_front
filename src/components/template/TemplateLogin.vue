<template>
  <slot></slot>
  <form class="form_container" @submit="login">
  <div class="logo_container"></div>
  <div class="title_container">
    <p class="title">Faça login na sua conta</p>
  </div>
  <br>
  <div class="input_container">
    <label class="input_label" for="email_field">E-mail</label>
    <input placeholder="example@example.com" title="Inpit title" name="input-name" type="text" class="input_field" id="email_field" v-model="email">
    <img src="../../assets/email.png" alt="Icone E-mail" class="icon" />
  </div>
  <div class="input_container">
    <label class="input_label" for="password_field">Senha</label>
    <input placeholder="Senha" title="Input title" name="input-name" type="password" class="input_field" id="password_field" v-model="senha">
    <img src="../../assets/senha.png" alt="Icone Senha" class="icon" />
  </div>
  <button title="Sign In" type="submit" class="sign-in_btn">
    <span>Entrar</span>
  </button>

  <div class="separator">
    <hr class="line">
    <span>Or</span>
    <hr class="line">
  </div>
   <button title="Sign In" type="submit" class="sign-in_ggl">
    <img src="../../assets/Gov.br_logo.png" class="logo-gov">
    <span>Entrar com GOV-BR</span>
  </button>
  <p class="note">Terms of use &amp; Conditions</p>
</form>
</template>

<script>
import axios from 'axios';
import eventBus from '../../barramento';

export default {
  data(){
    return {
      email:'',
      senha:''
    }
  },
  methods: {
    login(event) {
      event.preventDefault();
      axios
        .post('http://localhost:3001/auth/login', {
          email: this.email,
          password: this.senha,
        })
        .then((response) => {
          if (response.status === 201) {
            localStorage.setItem("authToken", response.data.acessToken);
            this.$router.push('/contact');
            eventBus.toggleRenderizaSidebar();
          }
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style scoped>
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
  padding: 0 0 0 40px;
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


