<!--
 * @Description:  
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-10 16:12:07
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-28 12:48:02
 * @FilePath: /arionbat-admin/src/views/Home.vue
-->
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <!-- <a-table
            :columns="columns"
            :row-key="record => record.entityId"
            :data-source="data"
            :pagination="pagination"
            :loading="loading"
            @change="handleTableChange"
        >
            <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
        </a-table> -->
        <!-- <ant-table selective selective-type="radio" data-url="/dashboard/getOrgTableByType/01.do" :columns="columns" key-index="entityId"> </ant-table> -->

        <ant-table selective-type="checkbox" data-url="/dashboard/getOrgTableByType/01.do" :columns="columns" :buttons="buttons" key-index="entityId">
        </ant-table>
        <ant-button :method="click" v-permission="'sys:menu:view'"></ant-button>
    </div>
</template>

<script>
// @ is an alias to /src
import AntTable from '@/components/AntTable.vue';
import AntButton from '@/components/AntButton.vue';

const columns = [
    {
        title: '组织名称',
        dataIndex: 'mfmc',
        sorter: true,
        width: '20%',
        align: 'center'
        // scopedSlots: { customRender: 'mfmc' }
    },
    {
        title: '主管单位',
        dataIndex: 'zgdw',
        align: 'center'
    },
    {
        title: '组织地址',
        dataIndex: 'mfdz',
        align: 'center'
    },
    {
        title: '组织法定代表人',
        dataIndex: 'mffr',
        align: 'center'
    },
    {
        title: '成立日期',
        dataIndex: 'clrq',
        sorter: true,
        align: 'center'
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        scopedSlots: { customRender: 'action' }
    }
    // ,
    // {
    //     title: '主管单位',
    //     dataIndex: 'gender',
    //     filters: [
    //         { text: 'Male', value: 'male' },
    //         { text: 'Female', value: 'female' }
    //     ],
    //     width: '20%'
    // },
    // {
    //     title: 'Email',
    //     dataIndex: 'email'
    // }
];

const buttons = [
    {
        tips: '查看',
        icon: 'search',
        methodName: 'view',
        permission: 'sys:menu:view'
    },
    {
        tips: '编辑',
        icon: 'edit',
        type: 'primary',
        methodName: 'edit',
        permission: 'sys:menu:edit'
    },
    {
        tips: '删除',
        icon: 'delete',
        type: 'danger',
        methodName: 'del',
        permission: 'sys:menu:del'
    }
];

export default {
    name: 'Home',
    components: { AntTable, AntButton },
    data() {
        return {
            data: [],
            pagination: {},
            loading: false,
            columns,
            buttons
        };
    },
    mounted() {},
    methods: {
        // handleTableChange(pagination, filters, sorter) {
        //     console.log(pagination);
        //     console.log(filters);
        //     console.log(sorter);
        //     const pager = { ...this.pagination };
        //     pager.current = pagination.current;
        //     console.log(pager);
        //     this.pagination = pager;
        //     this.fetch({
        //         pageSize: pagination.pageSize,
        //         page: pagination.current,
        //         sortField: sorter.field,
        //         sortOrder: sorter.order ? sorter.order.replace('end', '') : '',
        //         ...filters
        //     });
        // },
        // fetch(params = { page: 0, pageSize: 10 }) {
        //     console.log('params:', params);
        //     this.loading = true;
        //     home.getOrgTableByType('01', { page: params.page, pageSize: params.pageSize, sortField: params.sortField, sortOrder: params.sortOrder }).then(
        //         res => {
        //             const pagination = { ...this.pagination };
        //             // Read total count from server
        //             // pagination.total = data.totalCount;
        //             pagination.total = res.data.count;
        //             this.loading = false;
        //             this.data = res.data.result;
        //             this.pagination = pagination;
        //         }
        //     );
        // }
        click() {
            this.$router.push({
                name: 'About',
                params: { userId: '123' }
            });
            console.log('点到了');
        },
        view(payload) {
            console.log('查看', payload);
        },
        edit(payload) {
            console.log('编辑', payload);
        },
        del(payload) {
            console.log('删除', payload);
        }
    }
};
</script>
