/*
 * @Description: 全局请求封装，axios
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-01 22:28:54
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-01 22:36:24
 * @FilePath: /arionbat-admin/src/utils/request.js
 */

import axios from 'axios';
import { merge } from 'lodash';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/api',
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
});

instance.interceptors.request.use(
    function(config) {
        let timestamp = {
            t: new Date().getTime()
        };
        config.params = merge(config.params, timestamp);
        config.headers['autho'] = 'autho';
        console.log(config);
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        console.log(error);
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function(response) {
        return response.data;
    },
    function(error) {
        // 对响应错误做点什么
        console.log(error);
        return Promise.reject(error);
    }
);

export default {
    /**
     * @description: 使用get方式发起请求，url请求地址，params参数
     * @params: {url，params={}}
     * @return: Promise
     */
    get: (url, params = {}) => {
        return instance.get(url, { params });
    },
    /**
     * @description: 使用post方式发起请求，url请求地址，data传递的数据，params参数
     * @params: {url, data = {}, params = {}}
     * @return: Promise
     */
    post: (url, data = {}, params = {}) => {
        return instance.post(url, data, { params });
    },
    /**
     * @description: 使用put方式发起请求，url请求地址，data传递的数据，params参数
     * @params : {url, data = {}, params = {}}
     * @return: Promise
     */
    put: (url, data = {}, params = {}) => {
        return instance.put(url, data, { params });
    },
    /**
     * @description: 使用delete方式发起请求，url请求地址，params参数
     * @params: {url，params={}}
     * @return: Promise
     */
    delete: (url, params = {}) => {
        return instance.delete(url, { params });
    }
};
