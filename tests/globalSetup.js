import {chromium} from "@playwright/test";
import {LoginPage} from "../pages/loginPage"
import {acceptCookies} from "../pages/utils/acceptCookies";
import {testUser} from "../data/userData";
import {mkdir} from "node:fs/promises";
//import path from "path";

async function globalSetup() {
    const browser = await chromium.launch() //запускаем браузер
    const context = await browser.newContext() //создаем новый контекст
    const page = await context.newPage()//открывваем старницу

    const loginPage = new LoginPage(page)
    await loginPage.goto('https://lxafitclub.passion.io/login')
    await acceptCookies(page);
    await loginPage.login(testUser)
    await loginPage.loginButton.click();

    await page.waitForURL('https://lxafitclub.passion.io/app/products')

    await mkdir('./storage', { recursive: true }); //создаем папку storage
    const state = await context.storageState(); // Получаем состояние контекста
    console.log('Saving state:', state); // Логируем состояние для отладки
    await context.storageState({ path: './storage/state.json'})

    await browser.close();
}

export default globalSetup;