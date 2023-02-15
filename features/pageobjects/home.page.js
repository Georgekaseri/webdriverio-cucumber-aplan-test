class HomePage {
  // define selectors using getter methods

  get getPersonalLink() {
    return $("//a[text()='Personal']");
  }

  get getAplanLogo() {
    return $(".logo-wrap");
  }
}
export default new HomePage();
