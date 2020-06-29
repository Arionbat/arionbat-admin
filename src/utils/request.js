/*
 * @Description: 全局请求封装，axios
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-01 22:28:54
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-16 17:15:15
 * @FilePath: /arionbat-admin/src/utils/request.js
 */

import axios from 'axios';
import { merge } from 'lodash';
import { message } from 'ant-design-vue';
import store from '@/store';

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
        message.loading({ content: '加载中...', key: 'loading' });
        let timestamp = {
            t: new Date().getTime()
        };
        console.log(store);
        store.dispatch('user/getUserPermission', {});
        config.params = merge(config.params, timestamp);
        config.headers['autho'] = 'autho';
        console.log(config);
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        console.log(error);
        message.error({ content: '请求出错!', key: 'loading', duration: 2 });
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function(response) {
        message.success({ content: '请求成功', key: 'loading', duration: 2 });
        return response.data;
    },
    function(error) {
        // 对响应错误做点什么
        console.log(error);
        message.error({ content: '请求出错!', key: 'loading', duration: 2 });
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
