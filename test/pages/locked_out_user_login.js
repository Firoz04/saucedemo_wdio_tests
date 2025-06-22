const locked_out_user_locators = require("../locators/locked_out_user_locators");

class locked_out_user_login {
  async enterUsername(username) {
    await locked_out_user_locators.username.setValue(username);
    await browser.pause(2000);
  }

  async enterPassword(password) {
    await locked_out_user_locators.password.setValue(password);
    await browser.pause(2000);
  }

  async clickSigninBtn() {
    await locked_out_user_locators.buttonLogin.click();
    await browser.pause(2000);
  }

  async login(user, pass) {
    await this.enterUsername(user);
    await this.enterPassword(pass);
    await this.clickSigninBtn();
  }

  async getErrorMessage() {
    return await locked_out_user_locators.ErrorMessage.getText();
  }
}

module.exports = new locked_out_user_login();
