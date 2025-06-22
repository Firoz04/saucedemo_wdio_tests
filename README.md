# SauceDemo(Swag Labs) Automation Testing with WebdriverIO

This is an end-to-end automated test suite for [SauceDemo](https://www.saucedemo.com) using WebdriverIO, JavaScript, and Allure Reports.

## Tech Stack
Language: JavaScript

Framework: WebdriverIO

Browser: Chrome (via Chromedriver)

Reporting: Allure


# Test Scenarios

## Q1: Locked Out User Login Test
- Try to log in with username: `locked_out_user` and password: `secret_sauce`
- Verify the displayed error message matches the expected login failure notice


## Q2: Standard User Checkout Flow
- Log in with username: `standard_user` and password: `secret_sauce`
- Reset the App State from the hamburger menu
- Add any three items to the cart
- Proceed through the checkout process
- Verify:
  - All selected product names appear correctly
  - The total price is accurate
- Finish the purchase
- Verify the successful order message
- Reset App State again and log out


## Q3: Performance Glitch User Filter & Checkout Flow
- Log in with username: `performance_glitch_user` and password: `secret_sauce`
- Reset the App State
- Apply filter: Name (Z to A)
- Add the first item to the cart
- Navigate to checkout page
- Verify:
  - Product name(s) match the selected item
  - Total price is correct
- Complete the purchase
- Check the order success message
- Reset App State again and log out

# Author
Md. Firoz Hasan

Thank You!

