/*
 * @Description:
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-16 16:47:45
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-16 20:04:53
 * @FilePath: /arionbat-admin/src/store/module/user/getters.js
 */

const getters = {
    getUserPermission: state => {
        return state.permission;
    },
    getUserMenu: state => {
        return state.menu;
    }
};

export default getters;
