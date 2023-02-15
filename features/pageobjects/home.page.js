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
}
export default new HomePage();
