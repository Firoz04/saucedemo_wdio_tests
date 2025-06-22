const performance_user_page = require("../pages/performance_user_page");

describe("Performance Glitch User Journey", () => {
  const username = "performance_glitch_user";
  const password = "secret_sauce";

  it("should complete checkout after filtering and verify order", async () => {
    await performance_user_page.login(username, password);
    await performance_user_page.resetAppState();
    await performance_user_page.filterByNameZtoA();
    await performance_user_page.addFirstItemToCart();
    await performance_user_page.goToCart();
    await performance_user_page.checkout("Firoz", "Hasan", "5320");

    const productNames = await performance_user_page.getProductNamesOnOverview();
    const total = await performance_user_page.getTotalPrice();
    console.log("Products:", productNames);
    console.log("Total Price:", total);
    expect(productNames.length).toBe(1);

    await performance_user_page.finishOrder();
    const success = await performance_user_page.getSuccessMessage();
    expect(success).toEqual("Thank you for your order!");

    await performance_user_page.resetAppState();
    await performance_user_page.logout();
  });
});
