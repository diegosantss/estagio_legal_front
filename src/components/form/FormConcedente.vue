<template>
<div id="formularioConcedente">
    <form id="formConcedente" action="">

        <h1 id='h1Concedente'>Concedente</h1>

        <div class="input-container">
            <label for="RazaoSocial">Razao Social:</label>
            <input type="text" name="RazaoSocial">
        </div>

        <div class="input-container">
            <label for="CNPJ">Cnpj:</label>
            <input type="text" name="CNPJ">
        </div>

        <div class="input-container">
            <label for="CEP">CEP:</label>
            <input type="text" name="CEP">
        </div>

        <div class="input-container">
            <label for="Bairro">Bairro:</label>
            <input type="text" name="Bairro">
        </div>

        <div class="input-container">
            <label for="Cidade">Cidade:</label>
            <input type="text" name="Cidade">
        </div>

        <div class="input-container">
            <label for="UF">UF:</label>
            <input type="text" name="UF">
        </div>

        <div class="input-container">
            <label for="Endereco">Endereço:</label>
            <input type="text" name="Endereco">
        </div>

        <div class="input-container">
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder=" example@example.com">
        </div>
    </form>
</div>  
</template>

<script>
export default {

}
</script>

<style scoped>


#formularioConcedente{
        margin-left: 15.5vw;
    }
    #formConcedente{
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

    #h1Concedente{
        grid-column: 1 / -1;
        text-align: left;
    }
    

</style>