const locked_out_user_login = require("../pages/locked_out_user_login");

const username = "locked_out_user";
const password = "secret_sauce";
const ErrorMessage = "Epic sadface: Sorry, this user has been locked out.";

describe("locked_out_user Login Test", () => {
  it("Show error message when locked_out_user login", async () => {
    await locked_out_user_login.login(username, password);
    const actualError = await locked_out_user_login.getErrorMessage();
    expect(actualError).toEqual(ErrorMessage);
  });
});
