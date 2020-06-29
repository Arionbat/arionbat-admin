/*
 * @Description:
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-16 16:47:13
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-16 18:53:17
 * @FilePath: /arionbat-admin/src/store/module/user/mutations.js
 */

import USER from './mutations-types';

const mutations = {
    [USER.GET_USER_PERMISSION](state, payload) {
        console.log(payload);
        state.permission = payload;
    }
};

export default mutations;
