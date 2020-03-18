module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/react'
    ],
    overrides: [
        {
            files: ['**/*.test.js'],
            env: {
                jest: true
            }
        }
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    plugins: ['react-hooks'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [ '**/*test.js']
            }
        ],
        'import/order': ['error', { 'newlines-between': 'always'}],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx']}],
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    },
    settings: {
        react: {
            version: 'react'
        }
    }
};