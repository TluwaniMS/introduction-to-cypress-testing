Feature: SupeHeroManipulationFeature
    Testing Super Hero Manipulation Features

  @RequiresSignin @RequiresSignout
  Scenario: Delete SuperHero
    When I switch to the super-heroes view
    And Delete a super-hero named 'Imhotep'
    And I confirm the deletion
    Then I should be left with 2 super-heroes
