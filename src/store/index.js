import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import Auth from './Auth/index';

const debug = process.env.MODE !== 'production'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            loader: false,
            title: '***',
        }
    },
    plugins: [createPersistedState()],
    actions: {
        updatePageTitle(context, payload) {
            context.commit('commitTitle', payload)
        },
        updateLoader(context, payload) {
            context.commit('commitLoader', payload)
        },
    },
    getters: {
        loader: state => state.loader,
        title: state => state.title,
    },
    mutations: {
        commitTitle(state, data) {
            state.title = data
        },
        commitLoader(state, data) {
            state.loader = data
        },
    },
    modules: {
        Auth
    },
    strict: debug
})

export default store;
