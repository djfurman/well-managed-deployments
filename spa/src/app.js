import Vue from 'vue';
window.Vue = Vue;
window.eventHub = new Vue();

import App from './components/App.vue';
new Vue({
    components: { App }
}).$mount('#app');
