/*
 * @Description: store
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-16 16:52:13
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-16 17:22:02
 * @FilePath: /arionbat-admin/src/store/index.js
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import system from './module/system';
import user from './module/user';

Vue.use(Vuex);

const env = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        system: system,
        user: user
    },
    plugins: env ? [createLogger()] : []
});
