import { Given, Then, And,After } from "cypress-cucumber-preprocessor/steps";

After({ tags: "@RequiresSignout" }, () => {
  cy.signOut();
});

Given("I visit the projects url", () => {
  cy.visit("/");
});

And("I sign into application with valid credentials", () => {
  cy.fixture("login-sample-data").then((user) => {
    const _user = user.correctUserAuthenticationInformation;
    cy.signIn(_user.email, _user.password);
  });
});

Then(`I should see a {string} in the title`, (title) => {
  cy.get(".main-page-title").contains(title);
});
