import {test, expect} from "@playwright/test";
import {LoginPage1} from "@playwright/test";
test('test loginPage', async ({page})=>
{
    // username = "Admin";
    // password = "admin123";

    const log = new LoginPage1(page);
    log.login();
    log.isUsernameErrorDisplay();
    log.isPasswordErrorDisplay();

});