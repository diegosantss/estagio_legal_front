<template>
    <div class="info_user"
    :smallMenu="smallMenu"
    :class="{'icone-reduzido':smallMenu}"
    >
        <i class="material-icons">account_circle </i>
        <h1>{{titulo}}</h1>
        
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        titulo: 'Usuario: Sergio',
        iconeReduzido: false
      }
    },
    props:{
      smallMenu: {
        type: Boolean,
      },
    }
  }
  </script>
  
  <style scoped>
    .icone-reduzido h1{
      overflow: hidden;
    }

    .info_user{
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    white-space: nowrap;
    user-select: none;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: #FFFFFF;
    transition: all 0.3s ease;
    }

    h1{
        font-size: 20px;
        margin-left: 0px;
    }

    i{
        margin-right: 5px;
        font-size: 250%;
    }
  </style>