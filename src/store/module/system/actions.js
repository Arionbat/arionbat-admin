import SYSTEM from './mutations-types';

export default {
    userLoginSuccess: context => {
        context.commit(SYSTEM.USER_LOGIN_SUCCESS, {});
    }
};
