import { assert } from "chai";
import HomePage from "../pageobjects/home.page.js";
import { Given, When, Then } from "@wdio/cucumber-framework";

When("I click on Motor submenu", async () => {
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

  HomePage.clickOnCarLink(0);
});
Then("I should see Car insurance", async () => {
  await expect(HomePage.getCarLink).toBeExisting();
});

Then("I should click on Car insurance link", async () => {
  HomePage.clickOnCarLink(2);
});
Then("I should verify that I've landed to the right url", async () => {
  const url = await browser.getUrl();
  assert(url, "https://www.aplan.co.uk/personal/motor/car-insurance/");
});
