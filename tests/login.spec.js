import { test, expect } from '@playwright/test';
class LoginPage{
 constructor(){
        this.username = username;
        this.password = password;
    }

//test('tests', async ({ page }) => {
    async findLoc(page){
        const l1 = page.goto("https://rahulshettyacademy.com/client");
        const l2 = page.getByPlaceholder('Username').click();
        const l3 = page.getByPlaceholder('Username').fill(username);
        const l4 = page.getByPlaceholder('Password').click();
        const l5 = page.getByPlaceholder('Password').fill(password);
        const l6 = page.getByRole('button', { name: 'Login' }).click();
    }
}
module.exports = LoginPage;