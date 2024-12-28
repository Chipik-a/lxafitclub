import { defineConfig } from 'eslint-define-config';

import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig({
  env: {
    node: true,  // Указывает, что код будет выполняться в Node.js
    browser: true, // Указывает, что код будет выполняться в браузере (для Playwright)
    es2021: true,  // Поддержка ES2021
  },
  parserOptions: {
    ecmaVersion: 'latest',  // Поддержка последних возможностей ECMAScript
    sourceType: 'module',  // Указание, что это модуль
  },
  plugins: [
    'playwright',  // Плагин для Playwright
  ],
  extends: [
    'eslint:recommended',  // Рекомендуемые правила для JavaScript
    pluginJs.configs.recommended,  // Рекомендуемые настройки для JavaScript
    eslintConfigPrettier,  // Отключает правила ESLint, которые могут конфликтовать с Prettier
  ],
  rules: {
    'playwright/expect-expect': 'warn',  // Правило для Playwright
  },
});
