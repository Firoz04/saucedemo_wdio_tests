const performance_user_locators = require("../locators/performance_user_locators");

class Performance_User_Page {
  async login(username, password) {
    await performance_user_locators.username.setValue(username);
    await performance_user_locators.password.setValue(password);
    await browser.pause(1000);
    await performance_user_locators.loginBtn.click();
  }

  async resetAppState() {
    await browser.pause(1000);
    await performance_user_locators.menuBtn.click();
    await browser.pause(1000);
    await performance_user_locators.resetAppState.click();
    await browser.pause(1000);
  }

  async filterByNameZtoA() {
    await performance_user_locators.filterDropdown.selectByVisibleText("Name (Z to A)" );
    await browser.pause(3000);
  }

  async addFirstItemToCart() {
    const addButtons = await performance_user_locators.addToCartButtons;
    await addButtons[0].click();
    await browser.pause(2000);
  }

  async goToCart() {
    await performance_user_locators.cartIcon.click();
    await browser.pause(2000);
  }

  async checkout(fname, lname, zip) {
    await performance_user_locators.checkoutBtn.click();
    await performance_user_locators.firstName.setValue(fname);
    await performance_user_locators.lastName.setValue(lname);
    await performance_user_locators.postalCode.setValue(zip);
    await browser.pause(3000);
    await performance_user_locators.continueBtn.click();
    await browser.pause(1000);
  }

  async getProductNamesOnOverview() {
    const elements = await performance_user_locators.productNames;
    if (elements.length === 0) {
      throw new Error("No product elements found initially");
    }
    await elements[0].waitForExist({ timeout: 5000 });
    const names = [];
    for (const el of elements) {
      names.push(await el.getText());
    }
    return names;
  }

  async getTotalPrice() {
    return await performance_user_locators.summaryTotal.getText();
  }

  async finishOrder() {
    await browser.pause(2000);
    await performance_user_locators.finishBtn.click();
  }

  async getSuccessMessage() {
    await browser.pause(1000);
    return await performance_user_locators.successMessage.getText();
  }

  async logout() {
    await performance_user_locators.resetAppState.click();
    await browser.pause(2000);
    await performance_user_locators.logoutBtn.click();
    await browser.pause(3000);
  }
}

module.exports = new Performance_User_Page();
