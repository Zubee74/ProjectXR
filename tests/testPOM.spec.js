
import { expect, Locator, Page } from '@playwright/test';
class TestPOM {
constructor(page, url) {
this.page = Page;
//this.url = url ="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
this.userName = page.locator("[name='username']");
this.password = page.locator("[name='password']");
this.signIn = page.locator("[type='submit']");
}

async goto(){
await this.page.goto(this.url);
}
async loginTest(){
    await this.userName.fill("Admin");
    await this.password.fill("admin123");
    await this.signIn.click();
}
}
module.exports = {TestPOM};