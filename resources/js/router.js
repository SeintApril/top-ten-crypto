import Vue from 'vue';
import VueRouter from 'vue-router';

import CryptoApp from './components/CryptoApp';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: CryptoApp
        }
    ]
});

export default router;
