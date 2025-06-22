const standard_user_locators = require("../locators/standard_user_locators");

class StandardUserPage {
  async login(username, password) {
    await standard_user_locators.username.setValue(username);
    await standard_user_locators.password.setValue(password);
    await browser.pause(2000);
    await standard_user_locators.loginBtn.click();
  }

  async resetAppState() {
    await browser.pause(1000);
    await standard_user_locators.menuBtn.click();
    await browser.pause(1000);
    await standard_user_locators.resetAppState.click();
    await browser.pause(1000);
  }

  async addItemsToCart(count) {
    const buttons = await standard_user_locators.addToCartButtons;
    const limit = Math.min(count, buttons.length);
    for (let i = 0; i < limit; i++) {
      await buttons[i].click();
    }
    await browser.pause(3000);
  }

  async goToCart() {
    await standard_user_locators.cartIcon.click();
    await browser.pause(2000);
  }

  async checkout(fname, lname, zip) {
    await standard_user_locators.checkoutBtn.click();
    await standard_user_locators.firstName.setValue(fname);
    await standard_user_locators.lastName.setValue(lname);
    await standard_user_locators.postalCode.setValue(zip);
    await browser.pause(3000);
    await standard_user_locators.continueBtn.click();
    await browser.pause(1000);
  }

  async getProductNamesOnOverview() {
    const elements = await standard_user_locators.productNames;
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
    return await standard_user_locators.summaryTotal.getText();
  }

  async finishOrder() {
    await browser.pause(2000);
    await standard_user_locators.finishBtn.click();
  }

  async getSuccessMessage() {
    await browser.pause(1000);
    return await standard_user_locators.successMessage.getText();
  }

  async logout() {
    await standard_user_locators.resetAppState.click();
    await browser.pause(2000);
    await standard_user_locators.logoutBtn.click();
    await browser.pause(3000);
  }
}
module.exports = new StandardUserPage();
