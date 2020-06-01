/*
 * @Description:
 * @Version:
 * @Author: Arionbat
 * @Date: 2020-06-01 21:21:01
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-01 22:40:11
 * @FilePath: /arionbat-admin/src/api/home.js
 */

import http from '@/utils/request';

export default {
    /**
     * @description: 根据类型获取社会组织座标点集合{jg: 121.32121,wd: 31.65896}
     * @params {type}
     * @return:
     */
    getOrgPositionByType: type => {
        return http.get('/dashboard/getOrgPositionByType/' + type + '.do');
    }
};
