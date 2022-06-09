import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I visit the projects url", () => {
  cy.visit("/");
});

And("I sign into application with invalid credentials", () => {
  cy.fixture("login-sample-data").then((user) => {
    const _user = user.incorrectUserAuthenticationInformation;
    cy.signIn(_user.email, _user.password);
  });
});

Then(`I should receive a messaging stating {string}`, (message) => {
  cy.get(".snack-bar-error-container").contains(message);
});
