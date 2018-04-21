import Vue from 'vue';
window.Vue = Vue;
window.eventHub = new Vue();

import VueRouter from 'vue-router';
window.Vue.use(VueRouter);
import Vuex from 'vuex';
window.Vue.use(Vuex);

import router from './router';
import store from './store';
import App from './components/App';
new Vue({
    components: { App },
    router,
    store
}).$mount('#app');
