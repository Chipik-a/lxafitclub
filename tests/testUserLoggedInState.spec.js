import {expect, test} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import {acceptCookies} from "../pages/utils/acceptCookies";
import fs from 'fs';
// import {testUser} from "../data/userData";

test ('Login with test user', async ({ page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto('https://lxafitclub.passion.io/login')
    await acceptCookies(page);

    // Загружаем сохраненное состояние
    const state = JSON.parse(fs.readFileSync('./storage/state.json', 'utf8'));

    // Проверяем, что cookies существует и является массивом
    if (Array.isArray(state.cookies)) {
        // Добавляем куки в контекст
        await page.context().addCookies(state.cookies);
    } else {
        console.error('Cookies не найдены или они не в правильном формате');
        return;  // Прерываем тест, если cookies невалидны
    }

    // await page.context().addCookies(require('../storage/state.json').cookies);
    // await loginPage.coursesButton.click();
    await loginPage.coursesButton.click()
    await page.waitForURL('https://lxafitclub.passion.io/app/products');

    await expect(page).toHaveURL('https://lxafitclub.passion.io/app/products');
    console.log('Logged in and on courses page');

})