/*
 * @Description:
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-16 18:53:33
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-16 18:53:33
 * @FilePath: /arionbat-admin/src/store/module/user/actions.js
 */

import USER from './mutations-types';

export default {
    getUserPermission: context => {
        context.commit(USER.GET_USER_PERMISSION, ['sys:menu:view', 'sys:menu:edit', 'sys:menu:del']);
    }
};
