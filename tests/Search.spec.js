// Search.js POM
class SearchPage {
    constructor(page) {
      this.page = page;
      this.url2 = page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      this.userName = page.locator("[name='username']"); //Selectors 
      this.password =  page.locator("[name='password']");
      this.loginbtn =  page.locator("[type='submit']");
    } 
    
    // async naviFun() {
    // await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // }

//reference  variables
    async searchFun() { 
    await this.userName.fill("Admin");   //textbox 
    await this.password.fill("admin123");   //textbox
    await this.loginbtn.click();  //button
    }
  }

  module.exports = {SearchPage};