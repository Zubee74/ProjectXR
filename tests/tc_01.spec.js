import { test, expect } from '@playwright/test';
class LoginHRM{
  constructor(page){
    this.page=page;
    this.username = page.locator("'Username'");
    this.password = page.locator('Password');

  }
}

test('test', async ({ page }) => {
  const username = 'Admin';
  const password = 'admin123';
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

p)