class performance_user_locators {
  get username() {
    return $("//input[@name='user-name']");
  }
  get password() {
    return $("//input[@name='password']");
  }
  get loginBtn() {
    return $("//input[@name='login-button']");
  }
  get menuBtn() {
    return $("//button[@id='react-burger-menu-btn']");
  }
  get resetAppState() {
    return $("//a[@id='reset_sidebar_link']");
  }
  get filterDropdown() {
  return $("//select[@class='product_sort_container']");
}
  get logoutBtn() {
    return $("//a[@id='logout_sidebar_link']");
  }
  get addToCartButtons() {
    return $$("//button[contains(@class, 'btn_inventory')]");
  }
  get cartIcon() {
    return $("//a[contains(@class, 'shopping_cart_link')]");
  }
  get checkoutBtn() {
    return $("//button[@id='checkout']");
  }
  get firstName() {
    return $("//input[@id='first-name']");
  }
  get lastName() {
    return $("//input[@id='last-name']");
  }
  get postalCode() {
    return $("//input[@id='postal-code']");
  }
  get continueBtn() {
    return $("//input[@id='continue']");
  }
  get finishBtn() {
    return $("//button[@id='finish']");
  }
  get productNames() {
    return $$("//div[@class='inventory_item_name']");
  }
  get summaryTotal() {
    return $("//div[@class='summary_total_label']");
  }
  get successMessage() {
    return $("//h2[@class='complete-header']");
  }
}

module.exports = new performance_user_locators();
