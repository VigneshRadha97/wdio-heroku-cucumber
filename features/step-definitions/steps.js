const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../../pages/LoginPage");
const SecurePage = require("../../pages/SecurePage");
const { assert } = require("chai");

Given("the user is on login page", async () => {
  try {
    await LoginPage.open();
    const title = await browser.getTitle();
    assert.equal(title, "The Internet", "Page title is not valid");
  } catch (error) {
    console.error();
    assert.fail();
  }
});

When(
  "user logs in using username as {string} and password as {string}",
  async (username, password) => {
    try {
      (await LoginPage.txtusername).setValue(username);
      (await LoginPage.txtpassword).setValue(password);
    } catch (error) {
      console.error();
      assert.fail();
    }
  }
);

Then("user clicks on the login button", async () => {
  try {
    await LoginPage.btnlogin.click();
  } catch (error) {
    console.error();
    assert.fail();
  }
});

Then(
  "user must navigate to secure area page displaying a message {string}",
  async (successmessage) => {
    try {
      await (await SecurePage.messageElement).waitForExist();
      expect(await SecurePage.messageElement).toExist();
      expect(await SecurePage.messageElement).toHaveTextContaining(
        successmessage
      );

      await (await SecurePage.securePageElement).waitForExist();
      expect(await SecurePage.securePageElement).toExist();
      expect(await SecurePage.securePageElement).toHaveTextContaining(
        "Secure Area"
      );
      await browser.pause(3000);
    } catch (error) {
      console.error();
      assert.fail();
    }
  }
);

Then(
  "user must remain on the same login page displaying a message {string}",
  async (errormessage) => {
    try {
      await (await LoginPage.messageelement).waitForExist();
      expect(await LoginPage.messageelement).toExist();
      expect(await LoginPage.messageelement).toHaveTextContaining(errormessage);

      await (await LoginPage.loginpageelement).waitForExist();
      expect(await LoginPage.loginpageelement).toExist();
      expect(await LoginPage.loginpageelement).toHaveTextContaining(
        "Login Page"
      );
    } catch (error) {
      console.error();
      assert.fail();
    }
  }
);
