import { template } from "lodash";
import api from "../../api/api"

export default{

    methods:{
        message(typeMessage, title = null,  message, durationMessage = 4000){
            this.$notify({
                group: 'message',
                clean: true
            })
            this.$notify({
                group: 'message',
                title: title,
                text: message,
                type: typeMessage,
                duration: durationMessage,
            });
        },

        me(){
          let me = api.get(`/me`);
            if(me){
                return me;
            }
        },

       
    },
}