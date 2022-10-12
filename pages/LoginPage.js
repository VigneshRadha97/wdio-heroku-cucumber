const { assert } = require("chai");
const basepage = require("./BasePage");
const SecurePage = require("./SecurePage");

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
      (await this.txtusername).setValue(username);
      (await this.txtpassword).setValue(password);
    } catch (error) {
      console.error();
      assert.fail();
    }
  }

  async clicksignin() {
    try {
      await this.btnlogin.click();
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

  async loginerrorcheck(errormessage) {
    try {
      await (await this.messageelement).waitForExist();
      expect(await this.messageelement).toExist();
      expect(await this.messageelement).toHaveTextContaining(errormessage);

      await (await this.loginpageelement).waitForExist();
      expect(await this.loginpageelement).toExist();
      expect(await this.loginpageelement).toHaveTextContaining("Login Page");
    } catch (error) {
      console.error();
      assert.fail();
    }
  }
}

module.exports = new LoginPage();
