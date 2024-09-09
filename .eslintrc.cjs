import { aliases } from './vite.config.js';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

const mapAliases = object.entries(aliases).map((entry) => entry);

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:wc/recommended', 'plugin:lit/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'ES6',
        sourceType: 'module',
        extraFileExtensions: ['.svelte'],
    },
    ignorePatterns: ['node_modules/*', 'dist', 'examples', 'lib'],
    rules: {
        'prettier/prettier': ['error'],
        'no-param-reassign': ['error', { props: false }],
        'no-underscore-dangle': 0,
        quotes: ['error', 'backtick'],
    },
    settings: {
        // import/resolver` 는 `eslint-plugin-import` 의 경로 설정 옵션
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', 'html'],
            },
            alias: {
                map: mapAliases,
                extensions: ['.js', '.ts', 'html'],
            },
        },
    },
};

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    js.configs.recommended,
    ...svelte.configs['flat/recommended'],
    prettier,
    ...svelte.configs['flat/prettier'],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        ignores: ['build/', '.svelte-kit/', 'dist/'],
    },
];
