import { assert } from "chai";
import HomePage from "../pageobjects/home.page.js";
import { Given, When, Then } from "@wdio/cucumber-framework";

When("I click on Home & contents submenu", async () => {
  await browser.url("https://www.aplan.co.uk");
  await browser.waitUntil(
    async () =>
      (await $("//h2[contains(text(),'Find your branch')]").getText()) ===
      "Find your branch",

    {
      timeout: 8000,
      timeoutMsg: "expected text to be different after 5s",
    }
  );
  HomePage.clickOnHomeLink(0);
  browser.pause(90000);
});
Then("I should see Home insurance", async () => {
  await expect(HomePage.getHomeLink).toBeExisting();
});

Then("I should click on Home insurance link", async () => {
  HomePage.clickOnHomeLink(2);
});
Then(
  "I should verify that I've landed to the right destination url",
  async () => {
    const url = await browser.getUrl();
    assert(url, "https://www.aplan.co.uk/personal/motor/car-insurance/");
  }
);
