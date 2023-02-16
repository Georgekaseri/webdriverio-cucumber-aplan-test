Feature: The Aplan Website

  Scenario Outline: As a user, I can launch into the Aplan Website

    Given I am on the login page
    When I land to the page
    Then I should see Personal link
    Then I should verify the Get quote and Find more buttons

Scenario Outline: As a user, I can verify the Motor header

    When I click on Motor submenu
    Then I should see Car insurance
    Then I should click on Car insurance link
    Then I should verify that I've landed to the right url

Scenario Outline: As a user, I can verify the Home & contents header

    When I click on Home & contents submenu
    Then I should see Home insurance
    Then I should click on Home insurance link
    Then I should verify that I've landed to the right destination url

Scenario Outline: As a user, I can verify the Life & Health header

    When I click on Life & Health submenu
    Then I should see Life insurance
    Then I should click on Life insurance link
    Then I should verify that I've landed to the Life insurance url

 Scenario Outline: As a user, I can verify the Marine header

   When I click on Marine submenu
   Then I should see Private and pleasure marine insurance insurance
   Then I should click on Private and pleasure marine insurance link
   Then I should verify that I've landed to the marine insurance url