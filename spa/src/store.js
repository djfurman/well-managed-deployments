import Vue from 'vue';
import Vuex from 'vuex';


const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';


const state = {
    isAuthenticated: !!localStorage.getItem("token"),
};

const mutations = {
    [LOGIN] (state) {
        state.pending = true;
    },

    [LOGIN_SUCCESS] (state) {
        state.isAuthenticated = true;
        state.pending = false;
    },

    [LOGOUT] (state) {
        state.isAuthenticated = false;
    }
};

const getters ={
    isAuth: state => {
        return state.isAuthenticated;
    }
};

const actions = {
    login({ commit }, creds) {
        commit(LOGIN);
        window.eventHub.$emit('pending', {message: 'Logging you in'});
        return new Promise(resolve => {
            setTimeout(() => {
                localStorage.setItem("token", "JWT");
                commit(LOGIN_SUCCESS);
                window.eventHub.$emit('complete');
                resolve();
            }, 1000);
        });
    },

    logout({ commit }) {
        localStorage.removeItem("token");
        commit(LOGOUT);
    }
};

Vue.use(Vuex);
export default new Vuex.Store({
    actions,
    state,
    mutations,
    getters
});
