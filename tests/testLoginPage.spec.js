// playwright.config.js

import { test } from "@playwright/test";
// import { LoginPage } from "../pages/loginPage";
// import { acceptCookies } from "../pages/utils/acceptCookies";
import { loginState } from '../pages/utils/loginHelper'

test ('courses', async ({ page}) => {
    await loginState(page);
    console.log('Finish')
})




