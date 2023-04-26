
<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <img src="@/assets/Logo-IFPA.png" alt="logo-ifpa">
    
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
    />
    <i @click="smallMenu = !smallMenu" class="expand material-icons" :class="{ expand: expanded }">arrow_circle_right</i>
    
  </div>
</template>

<script>
import MenuItem from '@/components/template/MenuItem.vue';

export default {
  name: 'recursive-menu',
  data: () => ({
    watch:{
      smallMenu(value){
        if(value){
          this.expanded = this.expanded == true ? true : false;
        }
      }
    },
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
    MenuItem
  }
}
</script>

<style lang="scss" scoped>
img{
  transition: all .5s ease;
  width: 28%;
  height: 18%;
  left: 36.91%;
  right: 36.44%;
  top: 0%;
  bottom: 87.65%;
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
  background-color: #5CB85C;

  i {
    position: fixed;
    left: 100px;
    font-size: 35px;
    bottom: 15px;
    user-select: none;
    cursor: pointer;
    transition: all .3s ease;
    color: #e2d4d4;
    &.expand {
      transform: rotate(180deg);
    }
    
  }

  &.small-menu {
    overflow: inherit;
    width: 60px;
    padding-top: 10px;
    i {
      left: 12px;
    }
    img{
      width: 50%;
      height: 8%;
      transition: all .3s ease;
    }
  }
}
</style>