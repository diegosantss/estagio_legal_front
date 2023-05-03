<template>
  <div class='header' :class="{'localSmallMenu':localSmallMenu}">
      <h1>{{titulo}}</h1>
  </div>
</template>

<script>
import barramento from '@/barramento'
export default {
  data(){
    return{
      titulo: 'ESTAGIO LEGAL',
      localSmallMenu: false,
    }
  },
  created(){
    barramento.onSmallMenu(smallMenu =>{
      this.localSmallMenu = smallMenu;
    });
  }
}
</script>

<style scoped>
  .template{
  display: flex;
}
.header{
  /* width: 100%; */
  margin-left: 15.5vw;
  margin-bottom: 5vw;
  top: 0;
  right: 0;
  height: 8vh;
  box-shadow: 0px 0.39vw 0.39vw rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat';
  font-style: normal;
  transition: all .3s ease;
  justify-content: center;
  align-content: center;
  display: flex;
  align-items: center;
}
.header h1{
  font-weight: 600;
  font-size: 1.8vw;
  color: #055C05;
  text-align: center;
  white-space: nowrap; 
  align-items: center;
}

.localSmallMenu{
  margin-left: 3vw;
  transition: all .3s ease;
  height: 8.35vh;
}

/* Media Query para telas com largura máxima de 1080px */
@media screen and (max-width: 1080px) {
  .header {
    margin-left: 0;
  }
}

  
  /* template{
    display: flex;
  }
  .header{
    width: 100%;
    margin-left: 15.5%;
    
    top: 0;
    right: 0;
    height: 61px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Montserrat';
    font-style: normal;
    transition: all .3s ease;
    justify-content: center;
    align-content: center;
    display: flex;
    align-items: center;
  }
  .header h1{
    font-weight: 600;
    font-size: 25px;
    color: #055C05;
    text-align: center;
    white-space: nowrap; 
    align-items: center;
    
  }

  .localSmallMenu{
    margin-left: 3%;
    transition: all .3s ease;
        
  }
   */
</style>