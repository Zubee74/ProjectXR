// Search.js POM
class SearchPage {
    constructor(page) {
      this.page = page;
      //this.url2 = page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      this.userName = page.locator("[name='username']"); //Selectors 
      this.password =  page.locator("[name='password']");
      this.loginbtn =  page.locator("[type='submit']");
    } 

//reference  variables
    async searchFun() { 
    await this.userName.fill("Admin");   //textbox 
    //await expect(page).toHaveTitle();
    await this.password.fill("admin123");   //textbox
    await this.loginbtn.click();  //button
    }
  }

  module.exports = {SearchPage};

  //1.create a class with constructor
  //2.assign all the reference varaibles with constructor
  //3.assign refernce variable all the selectors values
  //4.create a new function and call all the reference variables with function of playwrights and JS
  //5.import class file in new file and fatch all the variables and functions through 