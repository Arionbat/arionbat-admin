<!--
 * @Description:  封装AntDesignVue Button 组件，在按钮上添加了是否防抖属性来决定是否防抖 debounce
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-11 16:22:06
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-28 12:48:47
 * @FilePath: /arionbat-admin/src/components/AntButton.vue
-->
<template>
    <a-button
        :disabled="disabled"
        :ghost="ghost"
        :html-type="htmlType"
        :icon="icon"
        :loading="loading"
        :shape="shape"
        :size="size"
        :type="type"
        :block="block"
        :data="data"
        @click="debounce ? click(method) : noDebounceClick(method)"
        ><slot v-if="!hideText">AntButton</slot></a-button
    >
</template>

<script>
import { debounce } from 'lodash';
import { mapGetters } from 'vuex';
// import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    name: 'AntButton',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        ghost: {
            type: Boolean,
            default: false
        },
        htmlType: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        loading: {
            type: [Boolean, Number],
            default: false
        },
        shape: {
            type: String,
            default: 'round'
        },
        size: {
            type: String,
            default: 'default'
        },
        type: {
            type: String,
            default: 'default'
        },
        block: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: null
        },
        method: {
            type: Function
        },
        data: {
            type: Object,
            default: null
        },
        hideText: {
            type: Boolean,
            default: false
        },
        methodName: {
            type: String,
            default: null
        },
        debounce: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            name: null
        };
    },
    computed: {
        ...mapGetters('user', ['getUserPermission'])
    },
    mounted() {},
    methods: {
        click: debounce(function(method) {
            if (typeof method === 'function') {
                method(this.$props.data, this.$props.methodName);
            }
        }, 300),
        noDebounceClick(method) {
            if (typeof method === 'function') {
                method(this.$props.data, this.$props.methodName);
            }
        }
    }
};
</script>

<style lang="sass" scoped></style>
