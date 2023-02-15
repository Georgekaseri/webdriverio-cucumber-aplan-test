import { Given, When, Then } from "@wdio/cucumber-framework";

Given("I am on the login page", async () => {
  await browser.url("https://www.aplan.co.uk");
  await (await $("#onetrust-accept-btn-handler")).click();
});

When("I land to the page", async () => {
  browser.pause(1000);
  await expect($(".logo-wrap")).toBeExisting();
});

Then("I should see Personal link", async () => {
  await expect($("//a[text()='Personal']")).toBeExisting();
  await expect($("//a[text()='Personal']")).toHaveTextContaining("Personal");
});
