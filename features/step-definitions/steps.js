import { assert } from "chai";
import HomePage from "../pageobjects/home.page.js";
import { Given, When, Then } from "@wdio/cucumber-framework";
//import { pause } from "webdriverio/build/commands/browser.js";

Given("I am on the login page", async () => {
  await browser.url("https://www.aplan.co.uk");
  await (await $("#onetrust-accept-btn-handler")).click();
});

When("I land to the page", async () => {
  browser.pause(1000);
  await expect($(".logo-wrap")).toBeExisting();
});

Then("I should see Personal link", async () => {
  await expect(HomePage.getAplanLogo).toBeExisting();
  await expect(HomePage.getPersonalLink).toHaveTextContaining("Personal");
});

Then("I should verify the Get quote and Find more buttons", async () => {
  await expect(HomePage.getGetQuote).toHaveTextContaining("Get a quote");
  await expect(HomePage.getFindMore).toHaveTextContaining("Find out more");
});

When("I click on Motor submenu", async () => {
  HomePage.clickOnCarLink(0);
  browser.pause(90000);
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
