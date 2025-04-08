import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,
    {
        ignores: ['dist'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module'
            }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            // TypeScript 규칙
            'no-undef': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            
            // Svelte 규칙
            'svelte/valid-compile': 'error',
            'svelte/no-at-html-tags': 'warn',
            
            // React 규칙
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'off',
            'react/prop-types': 'off',
            
            // 일반 규칙
            'no-console': 'warn',
            'no-underscore-dangle': 'off',
            'max-classes-per-file': 'off',
            'no-use-before-define': [
                'error',
                {
                    functions: true,
                    classes: true,
                    variables: true,
                    allowNamedExports: false
                }
            ],
            'no-restricted-syntax': ['off', 'ForOfStatement'],
            'import/prefer-default-export': 'off',
            'import/extensions': ['off'],
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'quotes': ['error', 'single', { allowTemplateLiterals: true }],
            
            // Prettier 규칙
            'prettier/prettier': ['error', {
                singleQuote: true,
                semi: true,
                tabWidth: 4,
                trailingComma: 'none',
                printWidth: 100,
                bracketSpacing: true,
                useTabs: false
            }]
        }
    },
    {
        files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
        ignores: ['dist', 'eslint.config.js', 'svelte.config.js', 'node_modules/**'],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: ['.svelte'],
                parser: ts.parser,
                svelteConfig
            }
        }
    }
);