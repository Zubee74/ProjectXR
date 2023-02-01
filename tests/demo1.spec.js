const {test, expect} = require("@playwright/test");
const {LoginPage1} = require('../POM/LoginPage1')

test('logindemo', async ({page})=>
{
    const loginPage1 = new LoginPage1(page); 
    loginPage1.goto(url);
    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    loginPage1.validLogin();
   
});

const x = {
    name : "xyz",
    show : function(){
        return this.name;
    }
};
console.log(x);
const y = {
    name : "xyz",
    show(){
        return this.name;
    }
};
console.log(y);

const user = ["xyz", 25, "Mumbai"];
const[name1, age1, city1] = user;
const user2 = ["xyz1", 24, "Pune"];
const[name, age, city] = user2;
console.log(user, user2);