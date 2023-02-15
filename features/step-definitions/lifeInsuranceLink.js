import { assert } from "chai";
import HomePage from "../pageobjects/home.page.js";
import { Given, When, Then } from "@wdio/cucumber-framework";

When("I click on Life & Health submenu", async () => {
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
  HomePage.clickLifeHealth[2];
  browser.pause(90000);
});
Then("I should see Life insurance", async () => {
  await expect(HomePage.getInsuranceLink).toBeExisting();
});

Then("I should click on Life insurance link", async () => {
  HomePage.clickInsuranceLink();
});
Then("I should verify that I've landed to the Life insurance url", async () => {
  const url = await browser.getUrl();
  assert(url, "https://www.aplan.co.uk/personal/life-health/life-insurance/");
});
