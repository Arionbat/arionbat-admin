/*
 * @Description:
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-10 16:11:06
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-28 13:36:11
 * @FilePath: /arionbat-admin/src/main.js
 */

import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Spin, Layout, Menu, Icon, Table, ConfigProvider, Tooltip, Form, Input, Row, Col, message } from 'ant-design-vue';
import './direct/permission';

Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Button.name, Button);
Vue.component(Spin.name, Spin);
Vue.component(Icon.name, Icon);
Vue.component(Table.name, Table);
Vue.component(Button.Group.name, Button.Group);
Vue.component(ConfigProvider.name, ConfigProvider);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

//设置全局提示
message.config({
    top: `100px`,
    duration: 2,
    maxCount: 3
});

Vue.prototype.$message = message;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    message,
    render: h => h(App)
}).$mount('#app');
