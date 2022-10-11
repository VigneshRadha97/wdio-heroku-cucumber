class BasePage {
  async open(path) {
    await browser.url(path);
    await browser.maximizeWindow();
  }
}

module.exports = new BasePage();
