class locked_out_user_locators {
  get username() {
    return $("//input[@name='user-name']");
  }
  get password() {
    return $("//input[@name='password']");
  }
  get buttonLogin() {
    return $("//input[@name='login-button']");
  }
  get ErrorMessage() {
    return $("//h3[@data-test='error']");
  }
}

module.exports = new locked_out_user_locators();
