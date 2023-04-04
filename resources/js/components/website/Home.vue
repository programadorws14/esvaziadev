<template>
   <div class="container box_home">
        <div class="row">

            <div class="col-12 col-md-7 mt-5">
                <h4  class="slogan-home"><b>Olá dev, <br />como foi seu dia ?</b></h4>
                <p class="text-slogan-home">Este é um lugar para você registrar tudo que aconteceu no seu dia. Esvazie sua mente e esteja pronto para o proximo desafio.</p>
               
            </div>

            <div class="col-md-5 d-none d-sm-none d-md-block d-xl-block mt-5">
                <img src="/imagem/esvazia_dev.svg" alt="Esvazia DEV" class="img-fluid">
            </div>


            <div class="col-12 text-center mt-4">
                <a class="btn btn-lg btn-outline-primary" href="/register">
                    Começar Agora <i class="fas fa-play-circle"></i>
                </a>
            </div>

        </div>

    </div>
</template>

<script>
export default {
 
}
</script>

<style>

.box_home{
    margin-top: 100px;
}


.slogan-home{
    font-size: 4rem;
    letter-spacing: -1px;
}

.text-slogan-home{
    font-weight: 300;
    font-size:23px;
}

.text-slogan{
    font-weight: 300;
    font-size:19px;
}

</style>