import { assert } from "chai";
import HomePage from "../pageobjects/home.page.js";
import { Given, When, Then } from "@wdio/cucumber-framework";

Given("I am on the login page", async () => {
  await browser.url("https://www.aplan.co.uk");
  await browser.maximizeWindow();
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
