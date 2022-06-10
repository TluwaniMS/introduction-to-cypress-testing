Feature: RegistrationFeature
        Testing registration Feature

  Scenario: Registering an already existing user
    Given I visit the projects url
    And I switch to the registration page
    And I register an already existing user
    Then I should receive a message stating "The provided credentials already exist please login"
