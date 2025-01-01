import { test } from '@playwright/test'
import {loginState} from "../pages/utils/loginHelper";

test.skip('login and save state', async({page}) => {
   await loginState(page);
   await page.context().storageState({ path: './storage/state.json' })

});