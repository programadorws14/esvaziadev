<template>

    <div class="form-signin" v-show="!is_logged">

        <a class="navbar-brand font-logo text-white" href="#">.esvazia<span class="text-primary">dev</span></a>

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

        <button 
            class="btn btn-lg btn-primary btn-block" 
            @click="submit()" 
            type="submit">
            <i class="fas fa-sign-in-alt"></i> Entrar
        </button>
        <!-- <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p> -->

        <notifications group="message" position="top right" />
       
    </div>
  
</template>

<script>
import api from '../../api/api'
import Mixin from '../mixins/mixin'
export default {
    mixins:[Mixin],
    data(){
        return {
            is_logged: true,
            errors_login: [],
            post:{
                email: null,
                password: null,
            }
        }
    },

    mounted(){
        if(localStorage.getItem('esvaziadev')){
            document.location.assign(`/home`);
            return;
        }else{
            this.is_logged = false;
        }
    },

    methods:{
        async submit(){
           await api.post('/login', this.post).then(res => {
                if(res.status == 200 && res.data.access_token){
                    localStorage.setItem('esvaziadev', res.data.access_token);
                    document.location.assign(`/home`);
                    return;
                }else{
                    this.message('error', 'Ooops!!', 'Não foi possível fazer login, tente novamente mais tarde');
                }
            }).catch(e => {
                console.log(e);

                if(e.response.data.errors){
                    this.message('error', 'Ooops!!', 'Não foi possível fazer login');
                    this.errors_login = e.response.data.errors;
                    return;
                }

                if(e.response.status == 401 && e.response.data.error == 'Unauthorized'){
                    this.errors_login = [];
                    this.errors_login.email = ['E-mail não existe ou está errado.']
                    this.errors_login.password = ['Senha inválida']
                    this.message('warn', 'Ooops!!', 'Login e senha inválidos, tente novamente',);
                }

                if(e.response.status == 401 && !e.response.data.active){
                    this.errors_login = [];
                    this.errors_login.email = ['Este usuário está desativado no momento.']
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