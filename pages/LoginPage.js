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
    await basepage.open("https://the-internet.herokuapp.com/logi");
  }
}

module.exports = new LoginPage();
