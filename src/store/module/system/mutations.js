import SYSTEM from './mutations-types';

const mutations = {
    [SYSTEM.USER_LOGIN_SUCCESS](state) {
        state.isLogin = !state.isLogin;
    }
};

export default mutations;
