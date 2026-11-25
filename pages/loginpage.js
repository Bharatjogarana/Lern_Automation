
const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;

        // Login page locators
        this.usernameInput = '#email1';
        this.passwordInput = '#password1';
        this.loginButton = '//button[normalize-space()="Sign in"]';
        this.signinlabel = '//h2[normalize-space()="Sign In"]';
    }

    // Login functionality
    async login(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    // Verify login page visibility
    async verifyloginpage() {
        await expect(
            this.page.locator(this.signinlabel)
        ).toBeVisible();
    }
}

module.exports = LoginPage;
