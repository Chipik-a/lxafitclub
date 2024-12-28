import { test, expect } from '@playwright/test';
import { acceptCookies } from '../pages/utils/acceptCookies';
import { HomePage } from "../pages/homePage";

test ('try singUp', async ({ page}) => {
    const homePage = new HomePage(page)
    await homePage.goto('/')
    // await homePage.cookieButton.click();
    await acceptCookies(page);
    await homePage.singUpBottun.click();
    await homePage.instantAccessButton.click();

    await expect(page).toHaveURL('https://lxafitclub.passion.io/login')
});

test ('move to courses', async ({page}) =>{
    const homePage = new HomePage(page)
    await homePage.goto('/')
    await acceptCookies(page);
    await homePage.coursesButton.click();

    await expect(page).toHaveURL('https://lxafitclub.passion.io/app/products')
})




