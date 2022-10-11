class SecurePage {
  get messageElement() {
    return $(`#flash`);
  }

  get securePageElement() {
    return $(`//div//child::h2[text()=' Secure Area']`);
  }
}

module.exports = new SecurePage();
