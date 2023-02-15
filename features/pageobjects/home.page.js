//import { $$ } from "webdriverio/build/commands/browser";

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
}
export default new HomePage();
