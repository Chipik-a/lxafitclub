import { LoginPage } from '../loginPage'
import { acceptCookies } from './acceptCookies'
import { testUser } from '../../data/userData'

export async function loginState(page) {
    const loginPage = new LoginPage(page);
    await loginPage.goto('https://lxafitclub.passion.io/login')
    await acceptCookies(page)
    await loginPage.login(testUser)
    await loginPage.loginButton.click();
    await page.waitForURL('https://lxafitclub.passion.io/app/products');
}
