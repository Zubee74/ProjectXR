//testPOM_call.spec.js
import { expect, test } from '@playwright/test';
import { SearchPage } from "./Search.spec";

test('test search', async ({page})=>
{
    // username = "Admin";
    // password = "admin123";

    const searchPage = new SearchPage(page);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    searchPage.searchFun();
});
