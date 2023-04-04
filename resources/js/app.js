// import * as VeeValidate from 'vee-validate';
import Notifications from 'vue-notification'


require('./bootstrap');
var moment = require('moment');
window.Vue = require('vue');

Vue.filter('fullDate', (value) => {
    if (!value) return ''
    return moment(value).format('DD/MM/YYYY H:mm:s')
});

Vue.filter('dateFormat', (value) => {
    if (!value) return ''
    return moment(value).format('DD/MM/YYYY')
});

// Vue.use(VeeValidate);
Vue.use(Notifications);

const app = new Vue({
    el: '#app',
    components:{
        HomeSite: () => import('./components/website/Home'),

        LoginSite: () => import('./components/website/Login'),
        RegisterSite: () => import('./components/website/Register'),

        HomeIndex: () => import('./components/app/home/HomeIndex'),
        ProfileIndex: () => import('./components/app/profile/Profile')
    }

});
