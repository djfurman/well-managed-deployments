import Changes from './components/Changes';
import Config from './components/Config';
import Dashboard from './components/Dashboard';
import Incidents from './components/Incidents';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import NotFound from './components/NotFound';

const routes = [
    { path: '/home', component: Dashboard },
    { path: '/incidents', component: Incidents },
    { path: '/changes', component: Changes },
    { path: '/configuration', component: Config },
    { path: '/login', component: Login },
    { path: '/', component: LandingPage },
    { path: '*', component: NotFound },
];

import VueRouter from 'vue-router';

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes
});
