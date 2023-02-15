Feature: The Aplan Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I land to the page
    Then I should see Personal link
    Then I should verify the Get quote and Find more buttons

    When I click on Motor submenu
    Then I should see Car insurance
    Then I should click on Car insurance link
    Then I should verify that I've landed to the right url