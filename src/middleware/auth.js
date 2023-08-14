import store from "../store/index";


export default function auth({ next, router }) {

    if (!store.getters['Auth/token']) {
        store.dispatch('Auth/updateIsLoggedIn', false);
        store.dispatch('Auth/updateToken', null);

        return router.push({ name: 'login' });
    }

    return next();
}
