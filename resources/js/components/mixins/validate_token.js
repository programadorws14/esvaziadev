import api from "../../api/api";

export default {
    data(){
        return{
            is_logged: false,
        }
    },
   
    methods:{
        async validateToken(){
            let token = localStorage.getItem('esvaziadev') ?  localStorage.getItem('esvaziadev') : null;
            if(!token){
                this.is_logged = false;
                localStorage.removeItem('esvaziadev');
                return document.location.assign('/login');
            }else{
                this.is_logged = true;
            }
        }
    }
    
}