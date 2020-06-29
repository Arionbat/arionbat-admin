<!--
 * @Description:  
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-22 10:44:48
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-22 13:49:04
 * @FilePath: /arionbat-admin/src/views/Login.vue
-->
<template>
    <div>
        <a-form>
            <a-row>
                <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                    <a-form-item>
                        <a-input placeholder="请输入用户名">
                            <a-icon slot="prefix" type="user" />
                        </a-input>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        <a-row></a-row>
    </div>
</template>
<script>
export default {};
</script>

<style lang="sass" scoped></style>
