const { assert } = require("chai");
const basepage = require("./BasePage");

class LoginPage {
  get txtusername() {
    return $("#username");
  }

  get txtpassword() {
    return $("#password");
  }

  get btnlogin() {
    return $(`//button[@type='submit']`);
  }

  get loginpageelement() {
    return $(`//div//child::h2[text()='Login Page']`);
  }

  get messageelement() {
    return $(`#flash`);
  }

  async open() {
    try {
      await basepage.open("/login");
      const title = await browser.getTitle();
      assert.equal(title, "The Internet", "Page title is not valid");
    } catch (error) {
      console.error();
      assert.fail();
    }
  }

  async entervalues(username, password) {
    try {
      (await LoginPage.txtusername).setValue(username);
      (await LoginPage.txtpassword).setValue(password);
    } catch (error) {
      console.error();
      assert.fail();
    }
  }

  async clicksignin() {
    try {
      await LoginPage.btnlogin.click();
    } catch (error) {
      console.error();
      assert.fail();
    }
  }

  async logincheck(successmessage) {
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
    } catch (error) {
      console.error();
      assert.fail();
    }
  }

  async loginerrorcheck(errormessage){
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
}

module.exports = new LoginPage();
