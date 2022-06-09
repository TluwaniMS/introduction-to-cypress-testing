Feature: LoginFeature
    Testing The Application Login Feature

  @RequiresSignout
  Scenario: Valid login
    Given I visit the projects url
    And I sign into application with valid credentials
    Then I should see a "Super Heroes" in the title

  Scenario: Invalid login
    Given I visit the projects url
    And I sign into application with invalid credentials
    Then I should receive a messaging stating "The provided credentials are incorrect"

  Scenario: Unknown user login
    Given I visit the projects url
    And I sign into application with unknown user credentials
    Then I should receive a messaging stating "The provided user does not exist"
