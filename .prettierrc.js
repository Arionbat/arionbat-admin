module.exports = {
    singleQuote: true, // 字符串使用单引号
    semi: true, // 每行末尾自动添加分号
    tabWidth: 4, // tab缩进大小,默认为2
    useTabs: false, // 使用tab缩进，默认false
    bracketSpacing: true, // 对象中打印空格 默认true
    arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 (avoid | always) avoid 能省略括号的时候就省略 例如x => x always 总是有括号
    printWidth: 160, // 换行长度，默认80
    endOfLine: 'auto', //结尾是 \n \r \n\r auto
    jsxBracketSameLine: true // 在jsx中把'>' 是否单独放一行
    // eslintIntegration: true //不让prettier使用eslint的代码格式进行校验
};
