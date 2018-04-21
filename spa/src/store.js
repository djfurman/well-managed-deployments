import Vuex from 'vuex';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

const store = Vuex.Store({
    state: {
        isAuthenticated: !!localStorage.getItem("token")
    },

    mutations: {
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
    },

    actions: {
        login({ commit }, creds) {
            commit(LOGIN);
            return new Promise(resolve => {
                setTimeout(() => {
                    localStorage.setItem("token", "JWT");
                    commit(LOGIN_SUCCESS);
                    resolve();
                }, 1000);
            });
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit(LOGOUT);
        }
    },

    getters: {
        isAuth: state => {
            return state.isAuthenticated;
        }
    }
});

export default store;
