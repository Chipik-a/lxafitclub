import { test, expect } from '@playwright/test';
import {acceptCookies} from "../pages/utils/acceptCookies";

test.use({ storageState: './storage/state.json' }); // Подключаем сохраненное состояние

test('Авторизованный тест', async ({ page }) => {
    await page.goto('https://lxafitclub.passion.io/app/products');
    await acceptCookies(page);
    // Проверяем, что страница загрузилась

    const courseTitle = page.locator('div[data-testid="course-card-title"]');
    await expect(courseTitle).toHaveText('В Марафон В')

    // Пишите свои тестовые действия
    console.log('Тест прошел в авторизованном состоянии!');
});