/*;
 * @Description:
 * @Version: 1.0
 * @Author: Arionbat
 * @Date: 2020-06-23 10:18:19
 * @LastEditors: Arionbat
 * @LastEditTime: 2020-06-23 10:18:19
 * @FilePath: /arionbat-admin/babel.config.js
 */

module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    // 配置babel-plugin-import, 用于按需加载组件代码和样式
    plugins: [
        [
            'import',
            {
                libraryName: 'ant-design-vue',
                libraryDirectory: 'es',
                style: 'css'
            }
        ]
    ]
};
