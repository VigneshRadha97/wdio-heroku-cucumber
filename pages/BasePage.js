const { assert } = require("chai");

class BasePage {
  async open(path) {
    try {
      await browser.url(path);
      await browser.maximizeWindow();
    } catch (error) {
      console.error();
      assert.fail();
    }
  }
}

module.exports = new BasePage();
