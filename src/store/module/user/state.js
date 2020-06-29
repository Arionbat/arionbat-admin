/*
 * @Description:
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-16 16:46:41
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-28 12:25:20
 * @FilePath: /arionbat-admin/src/store/module/user/state.js
 */

const state = {
    permission: ['sys:menu:view', 'sys:menu:edit', 'sys:menu:del'],
    menu: [
        {
            path: '/',
            name: 'Home',
            component: 'Home'
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: 'About'
        }
    ]
};

export default state;
