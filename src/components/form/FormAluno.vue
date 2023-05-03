<template>
   <div id="formularioAluno">
  <form id="formAluno" action="">

    <h1 id='h1aluno'>Aluno</h1>
    
    <div class="input-container">
        <label for="Nome">Nome:</label>
        <input type="text" name="Nome">
    </div>

    <div class="input-container">
        <label for="Matricula">Matrícula:</label>
        <input type="text" name="Matricula">
    </div>

    <div class="input-container">
        <label for="Curso">Curso:</label>
        <input type="text" name="Curso">
    </div>
    
    <div class="input-container">
        <label for="CPF">CPF:</label>
        <input type="text" name="CPF">
    </div>
    
    <div class="input-container">
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder=" example@example.com">
    </div>

    <div class="input-container">
        <label for="celular">Celular:</label>
        <input type="tel" name="celular" placeholder=" (xx) xxxxx-xxxx">
    </div>
    </form>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    
    #formularioAluno{
        margin-left: 15.5vw;
    }

    #formAluno{
        
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
        gap: 5px;
        
    }

    #h1aluno{
        grid-column: 1 / -1;
        text-align: left;
    }
    

</style>