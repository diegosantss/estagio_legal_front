<template>
  <div class='header'>
      <h1>{{titulo}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      titulo: 'ESTAGIO LEGAL'

    }
  }
}
</script>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 240px;
    right: 0;
    height: 60px;
    padding: 0 30%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Montserrat';
    font-style: normal;
  }
  .header h1{
    font-weight: 600;
    font-size: 25px;
    color: #055C05;
    text-align: center;
    white-space: nowrap;
  }
</style>