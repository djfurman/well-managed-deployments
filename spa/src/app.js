import Vue from 'vue';
window.eventHub = new Vue();

import router from './router';
import store from './store';
import App from './components/App';
const rootVm = new Vue({
    components: { App },
    router,
    store
}).$mount('#app');
window.wmd = rootVm;
