<template>

    <div class="form-signin">
      
        <a class="navbar-brand font-logo text-white" href="#">.esvazia<span class="text-primary">dev</span></a>
        <hr>
        <p><b>CRIAR UMA CONTA</b></p>
         <div class="form-group">
            <label for="inputName" class="sr-only">Nome</label>
            <input type="text" v-model.trim="post.name" id="inputName" :class="`form-control ${errors_login.name ? `is-invalid` : ``} `" placeholder="Digite seu Nome" required autofocus>
            <div v-show="errors_login.name" class="invalid-feedback">
                <p v-for="(err_name, index_err_name) in errors_login.name" :key="index_err_name"> {{ err_name }}</p>
            </div>
        </div>

        <div class="form-group">
            <label for="inputEmail" class="sr-only">E-mail</label>
            <input type="email" v-model.trim="post.email" id="inputEmail" :class="`form-control ${errors_login.email ? `is-invalid` : ``} `" placeholder="Digite seu e-mail" required autofocus>
            <div v-show="errors_login.email" class="invalid-feedback">
                <p v-for="(err_email, index_err_mail) in errors_login.email" :key="index_err_mail"> {{ err_email }}</p>
            </div>
        </div>

        <div class="form-group">
            <label for="inputPassword" class="sr-only">Senha</label>
            <input type="password" v-model.trim="post.password" id="inputPassword" :class="`form-control ${errors_login.password ? `is-invalid` : ``} `" placeholder="Digite sua Senha" required>
            <div v-show="errors_login.password" class="invalid-feedback">
                <p v-for="(err_password, index_err_password) in errors_login.password" :key="index_err_password"> {{ err_password }}</p>
            </div>
        </div>

        <div class="form-group">
            <label for="inputPassword" class="sr-only">Confirmar Senha</label>
            <input type="password" v-model.trim="post.password_confirmation" id="inputPassword" :class="`form-control ${errors_login.password ? `is-invalid` : ``} `" placeholder="Digite sua Senha" required>
            <div v-show="errors_login.password" class="invalid-feedback">
                <p v-for="(err_password, index_err_password) in errors_login.password" :key="index_err_password"> {{ err_password }}</p>
            </div>
        </div>

        <button 
            class="btn btn-lg btn-primary btn-block" 
            @click="submit()" 
            type="submit">
            <i class="fas fa-sign-in-alt"></i> Entrar
        </button>

         <div class="form-group text-center">
            <a href="/login" class="btn btn-link">Fazer login</a>
         </div>
        
        <!-- <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p> -->

        <notifications group="message" position="top center" />
       
    </div>
  
</template>

<script>
import api from '../../api/api'
import Mixin from '../mixins/mixin'
export default {
    mixins:[Mixin],
    data(){
        return {
            errors_login: [],
            post:{
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }
        }
    },

    methods:{
        async submit(){
            await api.post('/register', this.post).then(res => {
                if(res.status == 201 && res.data.user){
                    this.message('success', 'Aí Sim', 'Registro feito com sucesso');
                    document.location.assign(`/login`);
                    return;
                }else{
                    this.message('error', null, 'Não foi possível fazer o cadastro, tente novamente daqui alguns minutos');
                }
            }).catch(e => {
                if(e.response.data.errors){
                    this.message('error', null, 'Não foi possível fazer o seu cadastro');
                    this.errors_login = e.response.data.errors;
                    return;
                }
            });
        }
    }

}
</script>

<style scoped>

    html,
    body {
    height: 100%;
    }

    body {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: flex !important;
    -ms-flex-align: center !important;
    -ms-flex-pack: center !important;
    -webkit-box-align: center !important;
    align-items: center !important;
    -webkit-box-pack: center !important;
    justify-content: center !important;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    background-color: #f5f5f5 !important;
    }

    .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 10% auto 0;
    
    }
    .form-signin .checkbox {
    font-weight: 400;
    }
    .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
    border:1px solid #ced4da !important;
    border-radius: 4px !important;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    }

</style>