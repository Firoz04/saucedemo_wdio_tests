const standard_user_page = require("../pages/standard_user_page");

describe("Standard User Checkout Journey", () => {
  const username = "standard_user";
  const password = "secret_sauce";

  it("should complete the full purchase journey and verify data", async () => {
    await standard_user_page.login(username, password);
    await standard_user_page.resetAppState();
    await standard_user_page.addItemsToCart(3);
    await standard_user_page.goToCart();
    await standard_user_page.checkout("Firoz", "Hasan", "5320");

    const productNames = await standard_user_page.getProductNamesOnOverview();
    const total = await standard_user_page.getTotalPrice();
    console.log("Products:", productNames);
    console.log("Total Price:", total);
    expect(productNames.length).toBe(3);

    await standard_user_page.finishOrder();
    const success = await standard_user_page.getSuccessMessage();
    expect(success).toEqual("Thank you for your order!");

    await standard_user_page.resetAppState();
    await standard_user_page.logout();
  });
});
