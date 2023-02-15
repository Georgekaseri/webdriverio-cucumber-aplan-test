//const Page = require('./page');

import { $ } from "webdriverio/build/commands/browser";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage {
  /**
   * define selectors using getter methods
   */
  get getPersonalLink() {
    return $("//a[text()='Personal']");
  }

  get getAplanLogo() {
    return $(".logo-wrap");
  }
}

export default new SecurePage();
