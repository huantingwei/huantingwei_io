module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
    plugins: ['react-hooks'],
    // add your custom rules here
    rules: {
        "semi": "error",
        "quotes": ["error", "double"],
        'react/prop-types': 1,
        'react-hooks/rules-of-hooks': 'error', // 檢查 Hook 的規則
        'react-hooks/exhaustive-deps': 'warn', // 檢查 effect 的相依性
    },
}
