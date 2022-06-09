import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I visit the projects url", () => {
  cy.visit("/");
});

And("I register an already existing user", () => {
  cy.fixture("register-sample-data").then((user) => {
    const _user = user.existingUserInformation;
    cy.register(_user.email, _user.password);
  });
});

Then(`I should receive a message stating {string}`, (message) => {
  cy.get(".snack-bar-error-container").contains(message);
});
