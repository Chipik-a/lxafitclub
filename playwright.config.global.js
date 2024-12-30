import { defineConfig } from '@playwright/test';

export default defineConfig({
    globalSetup: require.resolve('./tests/globalSetup'),  // Указание на глобальный сетап
    use: {
        storageState: './storage/state.json',  // Использование сохранённого состояния
    },
});
