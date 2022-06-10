import { Then, And, When } from "cypress-cucumber-preprocessor/steps";

When("I decide to create content", () => {
  cy.createContent();
});

And("select the {string} content type", (superPower) => {
  cy.selectContentType(superPower);
});

And("I create a super power", () => {
  cy.fixture("super-power-sample-data").then((superPower) => {
    cy.createSuperPower(superPower.power, superPower.description);
  });
});

Then("I should have 6 super powers", () => {
  cy.get(".mat-card").should("have.length", 6);
});
