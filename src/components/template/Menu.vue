
<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <div class="logo">
      <img src="@/assets/Logo-IFPA.png" alt="logo-ifpa">
    </div>
    
    <IconeUsuario
    :smallMenu="smallMenu"
    />
    
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
    />
    <i @click="responsividadeComponentes" class="expand material-icons" :class="{ expand: expanded }">arrow_circle_left</i>
    
  </div>
</template>

<script>
import barramento from '@/barramento';
import MenuItem from '@/components/template/MenuItem.vue';
import IconeUsuario from '@/components/user/IconeUsuario.vue';

export default {
  name: 'recursive-menu',
  data: () => ({
    expanded: false,
    smallMenu: false,
    menuTree: [
      {
        label: "Home",
        icon: "home",

      },
      {
        label: "Inicio de Estágio",
        icon: "post_add",
        children: [
          {
            label: "Estágio Obrigatório",
            icon: "event_available",
          },
          {
            label: "Estágio Não Obrigatório",
            icon: "calendar_today",

          },
        ]
      },
      {
        label: "Fim de Estágio",
        icon: "task",
        children: [
          {
           label: "Emitir Atestado de Estágio",
            icon: "workspace_premium",
          },
        ]
      },
      {
        label: "Creditar horas",
        icon: "library_books",
        children: [
          {
           label: "Estágio Obrigatório",
            icon: "workspace_premium",
          },
          {
           label: "Horas Complementares",
            icon: "workspace_premium",
          },
          {
           label: "Projeto de Pesquisa",
            icon: "workspace_premium",
          },
        ]
      },
      {
        label: "Acompanhar Processo",
        icon: "schedule"
      },
      {
        label: "Settings",
        icon: "settings"
      }
    ]
  }),
  components: {
    MenuItem,
    IconeUsuario,
  },
  methods:{
    responsividadeComponentes(){
      this.smallMenu = !this.smallMenu;
      barramento.emitSmallMenu(this.smallMenu);
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  display: flex;
  justify-content: center;
  height: 8%;
  width: 100%;
  border-bottom: 1.8px solid #C5E9BB;
  
}
.logo img{
  transition: all .3s ease;
  width: 2.5vw;
  height: 9vh;
  top: 0%;
  padding-bottom: 1dvh;
  
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  height: 100vh;
  width: 240px;
  left: 0;
  top: 0;
  border-right: 1px solid #ececec;
  transition: all .3s ease;
  overflow: auto;
  background-color: #4a934a;

  i {
    position: fixed;
    left: 100px;
    font-size: 35px;
    bottom: 15px;
    user-select: none;
    cursor: pointer;
    transition: all .3s ease;
    color: #e2d4d4;
    
  }

  &.small-menu {
    overflow: inherit;
    width: 60px;
    padding-top: 10px;
    i {
      left: 12px;
      transform: rotate(180deg);
    
    }
    .logo{
      height: 7%;
    }
    .logo img{
      transition: all .3s ease;
      width: 1.9vw;
      height: 7.5vh;
      top: 0%;
      // width: 65%;
      // height: 100%;
      // transition: all .3s ease;
    }
    
  }


}


</style>