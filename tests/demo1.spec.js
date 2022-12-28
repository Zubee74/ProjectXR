const {test, expect} = require("@playwright/test");
const {LoginPage1} = require('../POM/LoginPage1')

test('logindemo', async ({page})=>
{
    const loginPage1 = new LoginPage1(page); 
    loginPage1.goto(url);
    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    loginPage1.validLogin();
   
});