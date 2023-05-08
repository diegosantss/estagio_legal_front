<template>
   <div id="formularioAluno">
  <form id="formAluno" action="">

    <h1 id='h1aluno'>Aluno</h1>
    
    <div class="input-container">
        <label class='label' for="Nome">Nome:</label>
        <input class='input' type="text" name="Nome">
    </div>

    <div class="input-container">
        <label class='label' for="Matricula">Matrícula:</label>
        <input class='input' type="text" name="Matricula">
    </div>

    <div class="input-container">
        <label class='label' for="Curso">Curso:</label>
        <input class='input' type="text" name="Curso">
    </div>
    
    <div class="input-container">
        <label class='label' for="CPF">CPF:</label>
        <input class='input' type="text" name="CPF">
    </div>
    
    <div class="input-container">
        <label class='label' for="email">Email:</label>
        <input class='input' type="email" name="email" placeholder=" example@example.com">
    </div>

    <div class="input-container">
        <label class='label' for="celular">Celular:</label>
        <input class='input' type="tel" name="celular" placeholder=" (xx) xxxxx-xxxx">
    </div>
    </form>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

    #formAluno{
        
        width: 100%;
        /* margin: auto 0; */
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

    #h1aluno{
        grid-column: 1 / -1;
        text-align: left;
    }
    

</style>