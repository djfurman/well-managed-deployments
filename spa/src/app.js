import Vue from 'vue';
window.Vue = Vue;

window.eventHub = new Vue();

import VueRouter from 'vue-router';
window.Vue.use(VueRouter);

import router from './router'
import App from './components/App';
new Vue({
    components: { App },
    router
}).$mount('#app');
