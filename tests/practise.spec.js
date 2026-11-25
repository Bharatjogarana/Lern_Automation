const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/loginpage');
const HomePage = require('../pages/homepage');
const practise = require('../pages/practisepage');

const testData = require('../testdata/testdata.json');

test('practise test', async ({ page }) => { 

    await page.goto(testData.url);


    const login1 = new LoginPage(page);

    await login1.login(testData.username, testData.password);

    const home1 = new HomePage(page);
    await page.waitForTimeout(3000);
    
    const p1 =new practise.PracticePage(page);

   

    await p1.verifypractisepage();
    await page.waitForTimeout(3000);     

    //await practise1.clickonenablefield(); 
    //await page.waitForTimeout(3000);  
    
    //await practise1.verifyotherfield();

});

  