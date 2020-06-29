<!--
 * @Description:  
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-11 15:19:47
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-22 15:36:13
 * @FilePath: /arionbat-admin/src/App.vue
-->
<template>
    <a-config-provider :getPopupContainer="getPopupContainer" :locale="locale">
        <div id="app">
            <router-view />
        </div>
    </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default {
    data() {
        return {
            locale: zhCN,
            zhCN
        };
    },
    methods: {
        getPopupContainer(el, dialogContext) {
            if (dialogContext) {
                return dialogContext.getDialogWrap();
            } else {
                return document.body;
            }
        }
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
