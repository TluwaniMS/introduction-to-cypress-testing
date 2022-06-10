import { Then, And, When } from "cypress-cucumber-preprocessor/steps";

When("I decide to create content", () => {
  cy.createContent();
});

And("select the {string} content type", (superHero) => {
  cy.selectContentType(superHero);
});

And("I create a super hero", () => {
  cy.fixture("super-hero-sample-data").then((superHero) => {
    cy.createSuperHero(superHero.name, superHero.superPower);
  });
});

Then("I should have 4 super heroes", () => {
  cy.get(".mat-card").should("have.length", 4);
});
