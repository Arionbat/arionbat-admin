/*
 * @Description: 自定义指令，用于按钮权限校验
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-28 10:53:13
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-28 13:39:50
 * @FilePath: /arionbat-admin/src/direct/permission.js
 */
import Vue from 'vue';
import store from '@/store/index';

const permission = Vue.directive('permission', {
    inserted: function(el, binding) {
        let hasFlag = false;
        if (binding.value instanceof Array) {
            for (let i = 0; i < binding.value.length; i++) {
                if (hasFlag) {
                    break;
                }
                hasFlag = hasPermission(binding.value[i]);
            }
        } else if (typeof binding.value === 'string') {
            hasFlag = hasPermission(binding.value);
        }
        if (!hasFlag) {
            el.parentNode.removeChild(el);
        }
    }
});

function hasPermission(permission) {
    let permissions = store.getters['user/getUserPermission'];
    if (permission === null) {
        return true;
    }
    return permissions.includes(permission);
}

export { permission };
