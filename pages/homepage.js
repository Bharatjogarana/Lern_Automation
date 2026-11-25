
const { expect } = require('@playwright/test');

class HomePage {

    constructor(page) {
        this.page = page;

        // Homepage locators
        this.homePageHeading = 'text=Learn Automation';
        this.logoutButton = "//button[normalize-space()='Sign out']";
        this.menuButton = "//img[@alt='menu']";
    }

    // Verify homepage
    async verifyhomepage() {
        await expect(
            this.page.locator(this.homePageHeading).first()
        ).toBeVisible();
    }

    // Logout from application
    async logoutfromapplication() {

        await this.page.locator(this.menuButton).click();

        await this.page.locator(this.logoutButton).click();
    }
}

module.exports = HomePage;
