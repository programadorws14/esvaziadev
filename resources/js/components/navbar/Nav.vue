<template>
    <nav class="navbar navbar-light bg-light d-flex justify-content-between">
        <a class="navbar-brand font-logo text-white" href="#">
            .esvazia<span class="text-primary">dev</span>
        </a>
        
        <a href="#" @click.prevent="logout()">
            <i class="fas fa-sign-out-alt"></i> Sair
        </a>
    </nav>
</template>
<script>
import api from '../../api/api'
import Mixin from '../mixins/mixin'
export default {
    mixins:[Mixin],
    methods:{
        async logout(){
            await api.post('/logout').then(res => {
                if(res.status == 200 ){
                    localStorage.removeItem('esvaziadev');
                    document.location.assign(`/login`);
                    return;
                }else{
                    this.message('error', null, 'Não foi possível fazer logout agora. tente novamente mais tarde');
                }
            }).catch(e => {
                if(e.response.data.errors){
                    this.message('error', null, 'Não foi possível fazer logout');
                    this.errors_login = e.response.data.errors;
                    return;
                }
            });
        }
    }
}
</script>