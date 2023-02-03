const { playwright } = require('@playwright/test');
//Define the loginpage class
class LoginPage1 {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.type('#txtusername', username);
        await this.page.type('#txtpassword', password);
        await this.page.click('#btnlogin');
        await this.page.waitForSelector('#menu_pin_viewPimModule');

    }

    async isUsernameErrorDisplay() {
        const usernameError = await this.page.$('#spanMessage[style="color:red;]');
        return usernameError !== null;
    }

    async isPasswordErrorDisplay() {
        const passwordError = await this.page.$('#spanMessage[style="color:red;]');
        return passwordError !== null;
    }
}

(async () => {
    //const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newcontext();
    const page = await context.newPage();
    await loginpage.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Try to log in with an empty username and a correct password
    await loginpage.login('', 'admin123');
    const usernameError = await loginpage.isUsernameErrorDisplayed();
    console.log(`Username error: ${usernameError}`);

    // Try to log in with a correct username and an incorrect password
    await loginpage.login('admin', 'incorrect_password');
    const passwordError = await loginpage.isPasswordErrorDisplayed();
    console.log(`Password error: ${passwordError}`);

    // Close the browser
    await browser.close();
})();

moduls.export = {LoginPage1};