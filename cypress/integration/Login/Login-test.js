import { Given,Then } from "cypress-cucumber-preprocessor/steps";

Given("I Login What happens", () => {
  cy.visit("/");
});

Then("We Move", () => {
  cy.contains("Sign-in");
});
