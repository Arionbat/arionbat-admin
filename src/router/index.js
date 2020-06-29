/*
 * @Description:
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-16 19:39:56
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-22 15:08:46
 * @FilePath: /arionbat-admin/src/router/index.js
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
const _import_ = require('@/router/_import_' + process.env.NODE_ENV).default;
import store from '@/store';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

console.log();

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes: routes
});

router.beforeEach((to, from, next) => {
    // ...
    // console.log(to);
    // console.log(from);
    // console.log(next);
    next();
});

router.afterEach((to, from) => {
    // ...
    console.log(to);
    console.log(from);
});

router.addRoutes(
    store.getters['user/getUserMenu'].map(item => {
        item.component = _import_(item.component);
        return item;
    })
);

export default router;
