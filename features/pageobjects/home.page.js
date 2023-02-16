class HomePage {
  // define selectors using getter methods

  get getPersonalLink() {
    return $("//a[text()='Personal']");
  }

  get getAplanLogo() {
    return $(".logo-wrap");
  }

  get getGreenButton() {
    return $$(".green button")[0];
  }

  get getGetQuote() {
    return $$("//*[text()='Get a quote']")[0];
  }

  get getFindMore() {
    return $$("//*[text()='Find out more']")[0];
  }

  get getCarLink() {
    return $$("//i[@class='fa fa-car']")[2];
  }

  async clickOnCarLink(index) {
    const ele = $$(".fa fa-car")[index];
    return await ele.click;
  }

  async clickOnHomeLink(index) {
    const ele = $$(".fa fa-home")[index];
    return await ele.click;
  }

  get getHomeLink() {
    return $$("//i[@class='fa fa-home']")[2];
  }

  async getHeaderText() {
    const ele = $("//h2[contains(text(),'Find your branch')]");
    return await ele.getText();
  }
  get getInsuranceLink() {
    return $("//*[@class='fa fa-lock']");
  }

  async clickInsuranceLink() {
    const ele = $(".fa fa-hospital-o");
    return await ele.click();
  }

  async clickLifeHealth(index) {
    const el = $$(".fa fa-angle-down")[index];
    let clickable = await el.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable());
    return await el.click();
  }

  get getMarineInsurance() {
    return $$(".fa fa-anchor")[2];
  }

  async MarineLink(index) {
    const el = $$(".fa fa-anchor")[index];
    let clickable = await el.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable());
    return await el.click();
  }

  async marineLinkq() {
    await (
      await $("//a[@title='Private and pleasure marine insurance']")
    ).click();
  }
}
export default new HomePage();
