module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'], //需要dev依赖里安装eslint-config-prettier
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //下面是核心设置，会覆盖vscode关于prettier的设置
        'prettier/prettier': [
            'error',
            {
                singleQuote: true, // 字符串使用单引号
                semi: true, // 每行末尾自动添加分号
                tabWidth: 4, // tab缩进大小,默认为2
                useTabs: false, // 使用tab缩进，默认false
                bracketSpacing: true, // 对象中打印空格 默认true
                arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 (avoid | always) avoid 能省略括号的时候就省略 例如x => x always 总是有括号
                printWidth: 160, // 换行长度，默认80
                endOfLine: 'auto', //结尾是 \n \r \n\r auto
                jsxBracketSameLine: true // 在jsx中把'>' 是否单独放一行
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
