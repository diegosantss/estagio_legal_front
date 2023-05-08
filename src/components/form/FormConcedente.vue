<template>
<div id="formularioConcedente">
    <form id="formConcedente" action="">

        <h1 id='h1Concedente'>Concedente</h1>

        <div class="input-container">
            <label class='label' for="RazaoSocial">Razao Social:</label>
            <input class='input' type="text" name="RazaoSocial">
        </div>

        <div class="input-container">
            <label class='label' for="CNPJ">Cnpj:</label>
            <input class='input' type="text" name="CNPJ">
        </div>

        <div class="input-container">
            <label class='label' for="CEP">CEP:</label>
            <input class='input' type="text" name="CEP">
        </div>

        <div class="input-container">
            <label class='label' for="Bairro">Bairro:</label>
            <input class='input' type="text" name="Bairro">
        </div>

        <div class="input-container">
            <label class='label' for="Cidade">Cidade:</label>
            <input class='input' type="text" name="Cidade">
        </div>

        <div class="input-container">
            <label class='label' for="UF">UF:</label>
            <input class='input' type="text" name="UF">
        </div>

        <div class="input-container">
            <label class='label' for="Endereco">Endereço:</label>
            <input class='input' type="text" name="Endereco">
        </div>

        <div class="input-container">
            <label class='label' for="email">Email:</label>
            <input class='input' type="email" name="email" placeholder=" example@example.com">
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
        
    }
    #formConcedente{
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

    #h1Concedente{
        grid-column: 1 / -1;
        text-align: left;
    }
    

</style>