import {expect, test} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import {acceptCookies} from "../pages/utils/acceptCookies";
import {testUser} from "../data/userData";

test.skip('courses', async ({ page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('https://lxafitclub.passion.io/login')
    await acceptCookies(page);
    await loginPage.coursesButton.click();
    await page.waitForURL('https://lxafitclub.passion.io/app/products')

    //await loginPage.cookieButton.click(); //
    await expect(page).toHaveURL('https://lxafitclub.passion.io/app/products')
    console.log('Finish')

})

test.skip('Login with test user', async ({ page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto('https://lxafitclub.passion.io/login')
    await acceptCookies(page);
    await loginPage.login(testUser)
    // await loginPage.loginButton.click()
})
