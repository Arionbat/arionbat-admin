import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Spin, Layout, Menu, Icon } from 'ant-design-vue';

Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Button.name, Button);
Vue.component(Spin.name, Spin);
Vue.component(Icon.name, Icon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
