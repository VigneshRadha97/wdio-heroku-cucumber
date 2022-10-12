const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../../pages/LoginPage");
const SecurePage = require("../../pages/SecurePage");
const { assert } = require("chai");

Given("the user is on login page", async () => {
  try {
    await LoginPage.open();
  } catch (error) {
    console.error();
    assert.fail();
  }
});

When(
  "user logs in using username as {string} and password as {string}",
  async (username, password) => {
    try {
      await LoginPage.entervalues(username, password);
    } catch (error) {
      console.error();
      assert.fail();
    }
  }
);

Then("user clicks on the login button", async () => {
  try {
    await LoginPage.clicksignin();
  } catch (error) {
    console.error();
    assert.fail();
  }
});

Then(
  "user must navigate to secure area page displaying a message {string}",
  async (successmessage) => {
    try {
      await LoginPage.logincheck(successmessage);
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
      await LoginPage.loginerrorcheck(errormessage);
    } catch (error) {
      console.error();
      assert.fail();
    }
  }
);
