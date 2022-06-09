Feature: LoginFeature
    Testing The Application Login Feature

  @RequiresSignout
  Scenario: Valid login
    Given I visit the projects url
    And I sign into application
    Then I should see a "Super Heroes" in the title
