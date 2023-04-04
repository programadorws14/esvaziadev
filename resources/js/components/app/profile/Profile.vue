<template>

    <div>
        <navbar />

        <div class="container ">
            <div class="row">
                <div class="col-12 mt-3">
                    <div class="p-4 shadow  bg-white rounded">
                        <div class="d-block w-100 d-flex justify-content-between">
                            <p><b>ATUALIZAR MEU PERFIL</b></p>
                            <div>
                                <a href="/home" class="btn btn-sm btn-primary"> <i class="fas fa-arrow-left"></i> Voltar</a>
                            </div>
                        </div>
                       

                        <div class="form-group d-block w-100 d-flex justify-content-center align-items-center ">
                            <label v-if="!post.photo_url" class="label_photo_profile  rounded-circle">FOTO</label>
                            <img v-else class="label_photo_profile mr-auto ml-auto rounded-circle" :src="this.post.photo_url" alt="Imagem de perfil">
                        </div>
                        

                        <div class="form-group">
                            <label for="inputName" >Foto de Perfil (JPG, GIF, PNG)</label>
                            <input 
                                :disabled="loading" 
                                type="file" 
                                ref="filePhoto"
                                accept="image/*"
                                @change="post.photo = $event.target.files[0]; " 
                                :class="`form-control ${errors_profile.photo ? `is-invalid` : ``} `" 
                                placeholder="Escolha sua foto" required autofocus
                            >
                            <div v-show="errors_profile.photo" class="invalid-feedback">
                                <p v-for="(err_photo, index_err_photo) in errors_profile.photo" :key="index_err_photo"> {{ err_photo }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputName" >Nome</label>
                            <input 
                                :disabled="loading" 
                                type="text" 
                                v-model.trim="post.name" 
                                id="inputName" 
                                :class="`form-control ${errors_profile.name ? `is-invalid` : ``} `" placeholder="Digite seu Nome" 
                                required 
                                autofocus   
                            >
                            <div v-show="errors_profile.name" class="invalid-feedback">
                                <p v-for="(err_name, index_err_name) in errors_profile.name" :key="index_err_name"> {{ err_name }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputEmail" >E-mail</label>
                            <input 
                                :disabled="loading" 
                                type="email" 
                                v-model.trim="post.email" 
                                id="inputEmail" 
                                :class="`form-control ${errors_profile.email ? `is-invalid` : ``} `" 
                                placeholder="Digite seu e-mail" 
                                required 
                                autofocus
                            >
                            <div v-show="errors_profile.email" class="invalid-feedback">
                                <p v-for="(err_email, index_err_mail) in errors_profile.email" :key="index_err_mail"> {{ err_email }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputPassword" >Senha</label>
                            <input 
                                :disabled="loading" 
                                type="password" 
                                v-model.trim="post.password" 
                                id="inputPassword" 
                                :class="`form-control ${errors_profile.password ? `is-invalid` : ``} `" 
                                placeholder="Digite sua Senha" 
                                required
                            >
                            <div v-show="errors_profile.password" class="invalid-feedback">
                                <p v-for="(err_password, index_err_password) in errors_profile.password" :key="index_err_password"> {{ err_password }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputEmail" >Fale sobre você</label>
                            <textarea 
                                :disabled="loading" 
                                v-model.trim="post.description" 
                                id="inputEmail" 
                                :class="`form-control`" 
                                placeholder="Digite seu e-mail"
                            >
                            </textarea>
                        </div>

                        <button 
                            :disabled="loading"
                            class="btn btn-lg btn-primary btn-block" 
                            @click="submit()" 
                            type="submit">
                            <i class="fas fa-edit"></i> Atualizar
                        </button>

                    </div>
                </div>


             </div>
        </div>

        <notifications group="message" position="top right" />
    </div>
  
</template>

<script>
import validateToken from '../../mixins/validate_token'
import Mixin from '../../mixins/mixin'
import api from '../../../api/api'
export default {
    mixins: [Mixin, validateToken],
    components:{
        Modal: () => import('../../shared/Modal'),
        Navbar: () => import('../../navbar/Nav')
    },

    data(){
        return{
            loading: false,
            errors_profile: [],
            post:{
                name: null,
                email: null,
                password: null,
                photo: null,
                photo_url: null,
                description: null,
            }
        }
    },

    async created(){
        this.validateToken();
        await this.me().then( res => {
            this.post.id = res.data.id;
            this.post.name = res.data.name;
            this.post.email = res.data.email;
            this.post.description = res.data.description;
            if(res.data.photo){
                this.post.photo_url = `/imagem/profile/${res.data.id}/${res.data.photo}`;
            }
        });
    },

    methods:{
        
        async submit(){
            this.loading = true;

            let dataForm = new FormData;
            dataForm.append('id', this.post.id);
            dataForm.append('name', this.post.name);
            dataForm.append('email', this.post.email);
            dataForm.append('description', this.post.description ? this.post.description : '');
            dataForm.append('photo', this.post.photo ?  this.post.photo : '');
            dataForm.append('_method', 'put');

            await api.post('/update-profile', dataForm).then(res => {
                this.loading = false;
                
                if(res.status == 200 && res.data.user){
                    if(res.data.user.photo){
                        console.log(res.data.user.photo)
                        this.post.photo_url = `/imagem/profile/${this.post.id}/${res.data.user.photo}`;
                    }
                    this.message('success', 'Sucesso', 'Atualizado com sucesso');
                    this.post.photo = null;
                    this.post.password = null;
                    this.errors_profile = [];
                    this.$refs.filePhoto.value = '';
                    return;
                }else{
                    this.message('error', null, 'Não foi possível fazer o cadastro, tente novamente daqui alguns minutos');
                }
                
            }).catch(e => {
                console.log(e);
                this.loading = false;
                if(e.response.data.errors){
                    this.message('error', null, 'Não foi possível fazer sua atualização');
                    this.errors_profile = e.response.data.errors;
                }else{
                    this.message('error', null, 'Não foi possível fazer o seu cadastro');
                }

                if(e.response.status == 401 && !e.response.data.active){
                    localStorage.removeItem('esvaziadev');
                    return document.location.assign('/login');
                }
            });
        }
    }
    
}
</script>

<style scoped>

    .label_photo_profile{
        width: 220px;
        height: 220px;
        border:3px dotted rgb(136, 135, 135);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>