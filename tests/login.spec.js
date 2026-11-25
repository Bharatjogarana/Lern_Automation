
const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/loginpage');
const HomePage = require('../pages/homepage');

const testData = require('../testdata/testdata.json');

test.describe('Login and Logout Tests', () => {

    test('Verify user can login and logout successfully', async ({ page }) => {

        // Step 1: Navigate to application
        await page.goto(testData.url);

        // Step 2: Initialize Login Page
        const login1 = new LoginPage(page);

        // Step 3: Login with test data
        await login1.login(
            testData.username,
            testData.password
        );

        // Step 4: Initialize Home Page
        const home1 = new HomePage(page);

        // Step 5: Verify homepage
        await home1.verifyhomepage();
        await page.waitForTimeout(5000);

        // Step 6: Logout
        await home1.logoutfromapplication();

        // Step 7: Verify user returned to login page
        await login1.verifyloginpage();
        await page.waitForTimeout(5000);
    });

});
