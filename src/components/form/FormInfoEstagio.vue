<template>
   <div id="formularioInfo">
    <form id="formInfoEstagio" action="">
  
      <h1 id='h1info'>Informações do Estágio</h1>
      <div class="input-container">
          <label for="periodoInicial">Periodo Inicial:</label>
          <input type="date" name="periodoInicial">
          <p>a</p>
          <label for="periodoFinal">Periodo Final:</label>
          <input type="date" name="periodoFinal">
        </div>
    
  
      <div class="input-container">
          <label for="horarioInicio">Horario de inicio:</label>
          <input type="time" name="horarioInicio">
          <p>a</p>
          <label for="horarioInicio">Horario de saída:</label>
          <input type="time" name="horarioInicio">
      </div>

      
      <div class="input-container">
          <label for="jornadaSemanal">Jornada Semanal:</label>
          <input type="text" name="jornadaSemanal">
      </div>
      
      <div class="input-container">
          <label for="bolsaAuxilio">Bolsa Auxílio:</label>
          <input type="number" name="bolsaAuxilio">
      </div>

      <div class="input-container">
          <label for="auxilioTransporte">Auxílio Transporte:</label>
          <input type="number" name="auxilioTransporte">
      </div>
  
      
      </form>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>

      #formularioInfo{
        margin-left: 15.5vw;
    }
      #formInfoEstagio{
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-rows: 1fr repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
        gap: 2vw;
        max-width: 60vw;
        background-color: #F8F9FC;
          
      }
  
      .input-container{
          display: flex;
          flex-direction: column;
          gap: 10px;
          
      }
  
      #h1info{
          grid-column: 1 / -1;
          text-align: left;
      }
      
  
  </style>