Feature: SupePowerManipulationFeature
    Testing Super Power Manipulation Features

  @RequiresSignin @RequiresSignout
  Scenario: Delete SuperPower
    When I switch to the super-powers view
    And Delete a super-power titled 'Halt Horn'
    And I confirm the deletion
    Then I should be left with 4 super-powers
