//home.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class BrowserstackHomePage {
// readonly url ="https://www.browserstack.com/";
// readonly page;
// readonly browserstackLogo: Locator;
// readonly productsMenu: Locator;
// readonly productmenudropdown:Locator

constructor(page) {
this.page = page;
this.browserstackLogo = page.locator('#logo');
this.productsMenu = page.locator('#product-menu-toggle');
this.productmenudropdown = page.locator('#product-menu-dropdown >div > ul >li >a >div[class="dropdown-link-heading"]');
}

async goto(){
await this.page.goto(this.url);
}
async clickOnProducts(){
await this.productsMenu.waitFor({state:"visible"});
await this.productsMenu.click();
}
}


//
// home.test.ts
// import { test, expect } from '@playwright/test';
// import { BrowserstackHomePage } from '../pages/home.page';
// test('Browserstack homepage verification', async ({ page }) => {
// const homepage = new BrowserstackHomePage(page);
// await homepage.goto();
// await homepage.clickOnProducts();
// await expect(homepage.productmenudropdown).toContainText(["Live", "Automate", "Percy", "App Live", "App Automate"])
// });