//import { test, expect } from '@playwright/test';
class InfoAdmin{
constructor(page){
  this.page = page;
  this.userName = page.locator('Username');
  this.password = page.locator('Password');
  this.btn1 = page.getByRole('button', { name: 'Login' }).click();
  this.myinfo = page.getByRole('link', { name: 'My Info' });
  this.firstName = page.getByPlaceholder('First Name');
  this.midName = page.getByPlaceholder('Middle Name');
  this.lastName = page.getByPlaceholder('Last Name');
}
async infoLog(){
  await userName.page.fill('Admin');
  await password.page.fill('admin123');
  await btn1.page.click();
}
async infoDetails(){
  await this.myinfo.page.click();
  await this.firstName.page.fill(this.firstName);
  await this.midName.page.fill(this.midName);
  await this.lastName.page.fill(this.lastName);
// }
// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();

//   await page.getByRole('link', { name: 'My Info' }).click();
//   await page.getByPlaceholder('First Name').click();
//   await page.getByPlaceholder('First Name').fill('Mohammad ');
//   await page.getByPlaceholder('Middle Name').click();
//   await page.getByPlaceholder('Middle Name').fill('Zubair');
//   await page.getByPlaceholder('Last Name').click();
//   await page.getByPlaceholder('Last Name').fill('Tester');
//   await page.locator('.oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-input').first().click();
//   await page.locator('.oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('Zubee');
//   await page.locator('div:nth-child(3) > div > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().click();
//   await page.locator('div:nth-child(3) > div > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('0025');
//   await page.locator('.oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().click();
//   await page.locator('.oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('007');
//   await page.locator('div:nth-child(3) > div:nth-child(2) > div > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
//   await page.locator('div:nth-child(3) > div:nth-child(2) > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('9766144');
//   await page.locator('form').filter({ hasText: 'Employee Full NameNicknameEmployee IdOther IdDriver\'s License NumberLicense Expi' }).locator('i').first().click();
//   await page.getByPlaceholder('yyyy-mm-dd').first().click();
//   await page.getByPlaceholder('yyyy-mm-dd').first().fill('1997-11-11');
//   await page.locator('div:nth-child(3) > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().click();
//   await page.locator('div:nth-child(3) > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('00001');
//   await page.locator('div:nth-child(3) > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
//   await page.locator('div:nth-child(3) > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('00002');
//   await page.locator('form').filter({ hasText: 'Employee Full NameNicknameEmployee IdOther IdDriver\'s License NumberLicense Expi' }).locator('i').nth(1).click();
//   await page.getByText('Indian').click();
//   await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
//   await page.getByRole('option', { name: 'Single' }).click();
//   await page.getByPlaceholder('yyyy-mm-dd').nth(1).click();
//   await page.getByPlaceholder('yyyy-mm-dd').nth(1).fill('1975-10-11');
//   await page.getByPlaceholder('yyyy-mm-dd').nth(1).click();
//   await page.getByPlaceholder('yyyy-mm-dd').nth(1).fill('1996-11-12');
//   await page.getByText('Male').first().click();
//   await page.locator('div:nth-child(7) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
//   await page.locator('div:nth-child(7) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('NA');
//   await page.locator('label').filter({ hasText: 'Yes' }).locator('i').click();
//   await page.locator('form').filter({ hasText: 'Employee Full NameNicknameEmployee IdOther IdDriver\'s License NumberLicense Expi' }).getByRole('button', { name: 'Save' }).click();
//   await page.getByRole('paragraph').filter({ hasText: 'Paul Collings' }).click();
//   await page.getByRole('menuitem', { name: 'Logout' }).click();
// });
}
}
module.exports = {InfoAdmin};