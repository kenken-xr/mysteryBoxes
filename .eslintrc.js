module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        jquery: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        "no-irregular-whitespace": "off", //这禁止掉 空格报错检查
        "no-unused-vars": 'off'
    }
}
