<template>
   <div id="formularioInfo">
    <form id="formInfoEstagio" action="">
  
      <h1 id='h1info'>Informações do Estágio</h1>
      <div class="input-container">
          <label class='label' for="periodoInicial">Periodo Inicial:</label>
          <input class='input' type="date" name="periodoInicial">
          <p>a</p>
          <label class='label' for="periodoFinal">Periodo Final:</label>
          <input class='input' type="date" name="periodoFinal">
        </div>
    
  
      <div class="input-container">
          <label class='label' for="horarioInicio">Horario de inicio:</label>
          <input class='input' type="time" name="horarioInicio">
          <p>a</p>
          <label class='label' for="horarioInicio">Horario de saída:</label>
          <input class='input' type="time" name="horarioInicio">
      </div>

      
      <div class="input-container">
          <label class='label' for="jornadaSemanal">Jornada Semanal:</label>
          <input class='input' type="text" name="jornadaSemanal">
      </div>
      
      <div class="input-container">
          <label class='label' for="bolsaAuxilio">Bolsa Auxílio:</label>
          <input class='input' type="number" name="bolsaAuxilio">
      </div>

      <div class="input-container">
          <label class='label' for="auxilioTransporte">Auxílio Transporte:</label>
          <input class='input' type="number" name="auxilioTransporte">
      </div>
  
      
      </form>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>

      #formInfoEstagio{
        width: 100%;
        /* margin: 0 auto; */
        display: grid;
        grid-template-rows: 1fr repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
        gap: 2vw;
        max-width: 60vw;
        background-color: #F8F9FC;
          
      }
  
      .input {
        max-width: 300px;
        height: 44px;
        background-color: #05060f0a;
        border-radius: .5rem;
        padding: 0 3rem;
        border: 2px solid transparent;
        font-size: 1rem;
        transition: border-color .3s cubic-bezier(.25,.01,.25,1) 0s, color .3s cubic-bezier(.25,.01,.25,1) 0s,background .2s cubic-bezier(.25,.01,.25,1) 0s;
    }

        .label {
        display: block;
        margin-bottom: .3rem;
        font-size: .9rem;
        font-weight: bold;
        color: #05060f99;
        transition: color .3s cubic-bezier(.25,.01,.25,1) 0s;
        }

        .input:hover, .input:focus, .input-container:hover .input {
        outline: none;
        border-color: #05060f;
        }

        .input-container:hover .label, .input:focus {
        color: #05060fc2;
        }

  
      #h1info{
          grid-column: 1 / -1;
          text-align: left;
      }
      
  
  </style>