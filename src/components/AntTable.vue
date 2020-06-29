<!--
 * @Description: 封装 AntDesignVue的Table组件，使其更易用，更方便
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-11 12:16:42
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-28 12:47:44
 * @FilePath: /arionbat-admin/src/components/AntTable.vue
-->
<template>
    <a-table
        :row-selection="selective ? rowSelection : null"
        :columns="columns"
        :row-key="getRowKey"
        tableLayout="fixed"
        :data-source="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
    >
        <a-button-group slot="action" slot-scope="record">
            <a-tooltip v-for="button in buttons" :key="button.index">
                <template>
                    <span slot="title">{{ button.tips }}</span>
                </template>
                <ant-button
                    hideText
                    :icon="button.icon"
                    :type="button.type"
                    :data="record"
                    :method="click"
                    :method-name="button.methodName"
                    :loading="button.loading"
                    v-permission="button.permission"
                    shape="round"
                    debounce
                ></ant-button>
            </a-tooltip>
        </a-button-group>
    </a-table>
</template>

<script>
import http from '@/utils/request';
import AntButton from '@/components/AntButton.vue';

export default {
    name: 'AntTable',
    components: { AntButton },
    props: {
        columns: {
            type: Array,
            default: new Array()
        },
        buttons: {
            type: Array,
            default: new Array()
        },
        dataUrl: {
            type: String,
            default: ''
        },
        keyIndex: {
            type: String,
            default: ''
        },
        selective: {
            type: Boolean,
            default: false
        },
        selectiveType: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            data: [],
            pagination: {
                showTotal: function(total) {
                    return '共计' + total + '条数据';
                },
                current: 1,
                pageSize: 10,
                showSizeChanger: true,
                showSizeChange: function(current, size) {
                    console.log(current, size);
                    this.pagination.pageSize = size;
                }
            },
            sortField: '',
            sortOrder: '',
            loading: false
        };
    },
    computed: {
        rowSelection() {
            return {
                type: this.$props.selectiveType,
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                },
                getCheckboxProps: record => ({
                    props: {
                        disabled: record.name === 'Disabled User', // Column configuration not to be checked
                        name: record.name
                    }
                })
            };
        }
    },
    mounted() {
        this.fetch();
    },
    methods: {
        handleTableChange(pagination, filters, sorter) {
            this.pagination.current = pagination.current;
            this.pagination.pageSize = pagination.pageSize;
            this.sortField = sorter.field;
            this.sortOrder = sorter.order ? sorter.order.replace('end', '') : '';
            this.fetch();
        },
        fetch() {
            this.loading = true;
            http.get(this.$props.dataUrl, {
                page: this.pagination.current,
                pageSize: this.pagination.pageSize,
                sortField: this.sortField,
                sortOrder: this.sortOrder
            }).then(res => {
                const pagination = { ...this.pagination };
                pagination.total = res.data.count;
                this.loading = false;
                this.data = res.data.result;
                this.pagination = pagination;
            });
        },
        getRowKey(record) {
            return record[this.$props.keyIndex];
        },
        click(payload, methodName) {
            this.$parent[methodName](payload);
        }
    }
};
</script>

<style lang="sass" scoped></style>
