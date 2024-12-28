
import {LoginPage} from "./loginPage"
import {acceptCookies} from "./utils/acceptCookies";
import {testUser} from "../data/userData";

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

    await context.storageState({ path: 'state.json'})

    await browser.close();
}

export default globalSetup;