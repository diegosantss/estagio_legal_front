<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <router-link to="/">
        <img :src="logoURL" alt="Vue"/>
      </router-link>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <div class="nav__list" :class="{'hideLabel':is_expanded}">
      
      <div class="nav__items">
        <h3 class="nav__subtitle">Menu</h3>
        <div class="nav__dropdown" @click="expandOptionInicioEstagio = !expandOptionInicioEstagio">
          <a href="#" class="nav__link">
            <span class="material-icons">note_add</span>
            <span class="nav__name">Inicio de Estágio</span>
          </a>
          <div class="nav__dropdown-collapse">
          <div class="nav__dropdown-content" :class="{'expand-option': expandOptionInicioEstagio}">
            <i class="material-icons"></i>
            <router-link
              to="/formularioObrigatorio"
              class="nav__dropdown-item"
            >
            <i class="material-icons">event_available</i>
              Obrigatório
            </router-link>
  
            <router-link
              to="/formularioObrigatorio"
              class="nav__dropdown-item"
            >
            <i class="material-icons">calendar_today</i>
              Não Obrigatório</router-link
            >
          </div>
          </div>
        </div>


        <!-- fim estagio -->
        <div class="nav__dropdown" @click="expandOptionFimEstagio = !expandOptionFimEstagio">
          <a href="#" class="nav__link">
            <i class="material-icons">task</i>
            <span class="nav__name">Fim de Estágio</span>
          </a>

          <div class="nav__dropdown-collapse">
            <div class="nav__dropdown-content" :class="{'expand-option': expandOptionFimEstagio}">
              <router-link to="" class="nav__dropdown-item">
                <i class="material-icons">workspace_premium</i>  
                <p>Emitir Atestado de Estágio </p>
              </router-link>
            </div>
          </div>
        </div>

        <a href="#" class="nav__link">
          <i class="material-icons">schedule</i>
          <span class="nav__name">Acompanhar Processos</span>
        </a>

        <a href="#" class="nav__link">
          <i class="material-icons">settings</i>
          <span class="nav__name">Configurações</span>
        </a>
      </div>

    </div>

    <div class="flex"></div>

    <!-- <div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div> -->
  </aside>
</template>

<script setup>
import { ref } from "vue";
import logoURL from "../../assets/Logo-IFPA.png";
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const expandOptionInicioEstagio = ref(false);
const expandOptionFimEstagio = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};

</script>

<style lang="scss" scoped>
//menu navegação
.nav__container::-webkit-scrollbar {
  display: none;
}

.nav__list,
.nav__items {
  display: grid;
}

.nav__list {
  row-gap: 2.5rem;
  flex-direction: column;
}

.nav__items {
  row-gap: 1.5rem;
}

.nav__subtitle {
  font-size: var(--normal-font-size);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--text-color-light);
}

.nav__link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  
}

.nav__link:hover {
  color: var(--first-color);
}

.nav__icon {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

.nav__name {
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  white-space: nowrap;
  display: none;
}

.nav__logout {
  margin-top: 5rem;
}

/* Dropdown */
.nav__dropdown.expand-option{
  overflow: hidden;
  max-height: 21px;
  transition: 0.4s ease-in-out;
}

.nav__dropdown-collapse.expand-option {
  background-color: var(--first-color-light);
  border-radius: 0.25rem;
  margin-top: 1rem;
}

.nav__dropdown-collapse{
  position: relative;
}

///////////////aqui

.nav__dropdown-content{
  display: none;
}

.nav__dropdown-content:hover{
	color: #073f07;
}

.nav__dropdown-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);
  color: #656161;
}

.nav__dropdown-item i{
  margin-right: 10px;
}

.nav__dropdown-item:hover {
  color: #073f07;
}

.nav__dropdown-icon {
  margin-left: auto;
  transition: 0.4s;
  
}

/* Show dropdown collapse */
.nav__dropdown.expand-option {
  max-height: 100rem;
}

/* Rotate icon arrow */
.nav__dropdown:hover .nav__dropdown-icon {
  transform: rotate(180deg);
}

//fim do menu navegação
aside {
  display: flex;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--light);

  width: calc(2rem + 32px);
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }
  

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .nav__dropdown-content.expand-option{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      grid-template-areas: 1fr 1fr;
      row-gap: 0.5rem;
      padding: 0.75rem 2.5rem 0.75rem 1.8rem;
      color: #656161;
      height: auto;
      margin-top: 4%;
      width: 100%;
      left: calc(100% + 6px);
      transition: height 0.3s ease;
      overflow: hidden;
      background: linear-gradient(
        108.65deg,
        #ffffff 1.89%,
        rgba(255, 255, 255, 0.74) 100%
      );
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
    }
    
    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    .nav__name {
      font-size: var(--small-font-size);
      font-weight: var(--font-medium);
      white-space: nowrap;
      display: unset;
      padding-left: 3%;
    }


    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}

aside:not(.is-expanded) {
  .nav__dropdown-content.expand-option{
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    grid-template-areas: 1fr 1fr;
    row-gap: 0.5rem;
    padding: 0.75rem 3.5rem 0.75rem 1.8rem;
    margin-bottom: 0%;
    color: #656161;
    height: auto;
    position: absolute;
    z-index: 9999;
    width: fit-content;
    left: calc(100% + 6px);
    top: calc(100% - 38px);
    transition: height 0.3s ease;
    overflow: hidden;
    white-space: nowrap;
    background: linear-gradient(
      108.65deg,
      #ffffff 1.89%,
      rgba(255, 255, 255, 0.26) 100%
    );
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.623), 0px 2px 2px rgba(0, 0, 0, 0.25),
      inset 0px 2px 2px rgba(0, 0, 0, 0.25), inset 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }

    .nav__dropdown{
      display: flex;
      align-items: space-around;
      /* width: fit-content; */
      
    }

    .nav__dropdown-collapse{
      margin-left: 20px;

    }
}
</style>