import Vue from 'vue';
window.eventHub = new Vue();

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import router from './router';
import store from './store';
import App from './components/App';
const rootVm = new Vue({
    components: { App },
    router,
    store
}).$mount('#app');
window.wmd = rootVm;
