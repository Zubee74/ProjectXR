// Search.js POM
class SearchPage {
    constructor(page) {
      this.page = page;
    }
    
// Separate URL with Locators
    async openFun(){
    const url2 = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    const userName = "[name='username']";
    const password = "[name='password']";
    const loginbtn = "[type='submit']";
    }

    async naviFun() {
    await this.page.goto(this.url2);
    }

//reference  variables
    async searchFun() { 
    await this.page.fill(userName);
    await this.page.fill(password);
    await this.page.press(loginbtn);
    }
  }

  module.exports = new SearchPage();