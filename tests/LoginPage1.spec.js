import { test, expect } from '@playwright/test';
export default class LoginPage1{
    constructor(page)
    {
        this.page = Page;
        this.userName = page.locator("[name='username']");
        this.password = page.locator("[name='password']");
        this.signIn = page.locator("[type='submit']");
    }
    async goto(url)
    {
        this.url = url;
        url = page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async validLogin()
    {
        await this.userName.fill("Admin");
        await this.password.fill("admin123");
        await this.signIn.click();
    }
}
module.exports = {LoginPage1};