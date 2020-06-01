import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import system from './module/system';

Vue.use(Vuex);

const env = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: { system: system },
    plugins: env ? [createLogger()] : []
});
