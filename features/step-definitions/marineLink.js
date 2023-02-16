import { assert } from "chai";
import HomePage from "../pageobjects/home.page.js";
import { Given, When, Then } from "@wdio/cucumber-framework";

When("I click on Marine submenu", async () => {
  await browser.url("https://www.aplan.co.uk");
  await browser.maximizeWindow();
  await browser.waitUntil(
    async () =>
      (await $("//h2[contains(text(),'Find your branch')]").getText()) ===
      "Find your branch",

    {
      timeout: 8000,
      timeoutMsg: "expected text to be different after 5s",
    }
  );
  //await await $$("//span[text()='Marine']")[0].click();

  HomePage.clickOnCarLink(0);
  browser.pause(40000);
});
Then(
  "I should see Private and pleasure marine insurance insurance",
  async () => {
    await expect(HomePage.getCarLink).toBeExisting();
  }
);

Then(
  "I should click on Private and pleasure marine insurance link",
  async () => {
    HomePage.clickOnCarLink(2);
  }
);
Then(
  "I should verify that I've landed to the marine insurance url",
  async () => {
    const url = await browser.getUrl();
    assert(url, "https://www.aplan.co.uk/personal/motor/car-insurance/");
  }
);
