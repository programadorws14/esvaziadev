<template>

    <div v-if="is_logged">
        <navbar />
        
        <div class="container ">
            <div class="row" id="home">
                <div class="mt-3 mb-3 col-12 text-right">
                
                    <button class="btn btn-sm btn-lg btn-outline-primary"  data-toggle="modal" data-target="#start" >
                        <i class="fas question-circle"></i> Sabe como funciona ?
                    </button>
                    
                </div>

                <div class="col-lg-4 col-xl-3 mb-3">
                    <div class="p-4 shadow  bg-white rounded">

                        <div class="media align-items-center mb-4">
                            <label v-if="!user.photo" class="label_photo_profile  rounded-circle mr-3"  width="80" height="80" >FOTO</label>
                            <img v-else class="mr-3 rounded-circle" :src="`/imagem/profile/${user.id}/${user.photo}`" width="80" height="80" alt="">
                            <div class="media-body">
                                <h3 class="mb-0">{{ user.name ? user.name : null }}</h3>
                                <p class="text-muted mb-0">{{ user.created_at | dateFormat }}</p>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col">
                                <div class="card card-profile text-center">
                                    <span class="mt-2 mb-1 text-primary"><i class="fas fa-address-book"></i></span>
                                    <h3 class="mb-0">{{ declarations.length }}</h3>
                                    <p class="text-muted px-4">Postagens</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card card-profile text-center">
                                    <span class="mt-2 mb-1 text-primary"><i class="fas fa-camera"></i></span>
                                    <h3 class="mb-0">11</h3>
                                    <p class="text-muted">Fotos</p>
                                </div>
                            </div>
                            <!-- <div class="col-12 text-center">
                                <button class="btn btn-danger px-5">Follow Now</button>
                            </div> -->
                        </div>

                        <h4>Você</h4>
                        <p class="text-muted">{{ user.description }}</p>

                        <div class="col-12 text-center">
                            <a href="/me" class="btn btn-primary px-5">Atualizar Perfil</a>
                        </div>

                    </div>
                </div>

                <div class="col-lg-8 col-xl-9">
                    <div class="card mb-4">
                        <div class="card-body">

                            <div class="form-group">
                                <b v-if="post.id">Editando </b>
                                <textarea 
                                    v-model.trim="post.declaration"
                                    class="form-control" 
                                    name="declaration" 
                                    id="declaration" 
                                    cols="30" 
                                    rows="2" 
                                    placeholder="Faaala dev, o que houve ?"
                                ></textarea>
                            </div>

                            <div class="d-flex align-items-center">
                                <!-- <ul class="mb-0 form-profile__icons">
                                    <li class="d-inline-block">
                                        <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-user"></i></button>
                                    </li>
                                    <li class="d-inline-block">
                                        <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-paper-plane"></i></button>
                                    </li>
                                    <li class="d-inline-block">
                                        <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-camera"></i></button>
                                    </li>
                                    <li class="d-inline-block">
                                        <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-smile"></i></button>
                                    </li>
                                </ul> -->
                                <button @click="submit()" class="btn btn-primary mr-1">Esvaziar</button>
                                <button v-if="post.id" @click="post = { declaration: null } " class="btn btn-danger">Cancelar</button>
                            </div>
                        
                        </div>
                    </div>

                    <p v-if="loading_declarations" class="text-center h5">
                        Carregando suas declarações...
                    </p>
                    
                    <div  v-if="!loading_declarations">

                        <div :class="`card mb-3 ${post.id && post.id == declaration.id ? `bg-warning` : ``}`" v-for="(declaration, indice) in declarations" :key="indice">
                            <div class="card-body">
                                <div class="media media-reply">

                                    <label v-if="declaration && !declaration.user.photo" class="label_photo_profile  rounded-circle mr-3"  width="50" height="50">FOTO</label>
                                    <img v-else class="mr-3 rounded-circle" width="50" height="50" :src="`/imagem/profile/${declaration.user.id}/${declaration.user.photo}`" :alt="declaration.user.name">        

                                    <div class="media-body">
                                        <div class="d-sm-flex justify-content-between mb-2">
                                            <h5 class="mb-sm-0">{{ declaration.user.name }} <small class="text-muted ml-3">{{ declaration.date_description }}</small></h5>
                                            <div class="media-reply__link">

                                                <button class="btn btn-sm btn-lg btn-outline-primary mr-2"  data-toggle="modal" data-target="#start" >
                                                    <i class="fa fa-thumbs-up"></i> Esvaziei
                                                </button>


                                                 <button class="btn btn-sm btn-lg btn-outline-info mr-2"  data-toggle="modal" data-target="#start" >
                                                    <i class="fa fa-thumbs-down"></i> Não Esvaziei
                                                </button>
                                                

                                                <a v-if="declaration" href="#home" @click="post.id = declaration.id;  post.declaration = declaration.declaration; post.indice = indice;" class="btn btn-transparent p-0 ml-3 font-weight-bold"><i class=" fas fa-edit"></i> Editar</a>
                                            </div>
                                        </div>
                                        
                                        <p>{{ declaration.declaration }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button v-if="current_page && last_page && current_page < last_page" @click="getDeclarations()" class="btn btn-sm btn-lg btn-outline-primary w-100 d-block mb-3"  >
                            <i class="fas fa-download"></i> Carregar mais...
                        </button>

                    </div>

                </div>

                <modal id="start" :show-header="false" >

                    <h4 class="mb-3">uuuuuuph, bora lá</h4>
                    
                    <span class="d-block w-100 mb-3"><span class="h1">1.</span> Junte todos os pensamentos e emoções que você gerou durante o dia. </span>

                    <span class="d-block w-100 mb-3"><span class="h1">2.</span> Coloque todos dentro do campo de texto disponível na tela, fale tudo que você quiser. </span>

                    <span class="d-block w-100 mb-3"><span class="h1">3.</span> Depois é só clicar em "ESVAZIAR" e liberar o espaço no seu humor. </span>

                </modal>
             </div>
        </div>

        <notifications group="message" position="top right" />
    </div>
  
</template>

<script>
import validateToken from '../../mixins/validate_token';
import Mixin from '../../mixins/mixin';
import api from '../../../api/api';
export default {
    mixins: [validateToken, Mixin],
    components:{
        Modal: () => import('../../shared/Modal'),
        Navbar: () => import('../../navbar/Nav')
    },

    data(){
        return{
            loading_declarations: true,
            user: [],
            current_page: null,
            last_page: null,
            declarations: [],
            post:{
                declaration: null,
            }
            
        }
    },

    async mounted(){

        await this.validateToken();

        this.me().then(res => {
            this.user = res.data;
        });
        
        this.getDeclarations();
    },

    methods:{
        submit(){
            if(this.post.declaration && this.post.declaration != ''){
                api.post(`/declaration`, this.post).then(res => {
                     if(res.status == 201){

                        if(this.post.id){
                            this.declarations[this.post.indice].declaration = res.data.declaration;
                        }else{
                            this.declarations = [res.data, ...this.declarations];
                        }
                        
                        this.post = { declaration: null }
                    }
                }).catch(e => {
                    this.message('warn', 'oooops',  e.response.data.error);
                });
            }
        },

        async getDeclarations(){

            if(this.current_page && this.last_page){
                if(this.current_page >= this.last_page){
                    return;
                }else{
                    this.current_page += 1;
                }
            }
            
            await api.get(`/declarations?page=${this.current_page}`).then(res => {
                this.loading_declarations = false;
                this.declarations = this.declarations.concat(res.data.data)
                this.current_page = res.data.current_page
                this.last_page = res.data.last_page
            });
            
        },

    }
    
}
</script>

<style scoped>

    .card-profile__info{
        
        list-style: none !important;
    }

    .card-profile__info li strong {
        max-width: 100px; 
    }

     .label_photo_profile{
        width: 80px;
        height: 80px;
        border:3px dotted rgb(136, 135, 135);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>