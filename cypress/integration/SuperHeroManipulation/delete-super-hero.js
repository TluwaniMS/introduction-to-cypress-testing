import {
  Then,
  And,
  After,
  Before,
  When,
} from "cypress-cucumber-preprocessor/steps";

Before({ tags: "@RequiresSignin" }, () => {
  cy.fixture("login-sample-data").then((user) => {
    const _user = user.correctUserAuthenticationInformation;
    cy.signIn(_user.email, _user.password);
  });
});

After({ tags: "@RequiresSignout" }, () => {
  cy.signOut();
  cy.reload();
});

When("I switch to the super-heroes view", () => {
  cy.routeToSuperHeroView();
});

And("Delete a super-hero named {string}", (superHero) => {
  cy.deleteSuperHero(superHero);
});

And("I confirm the deletion", () => {
  cy.confirmDeletion();
});

Then("I should be left with 2 super-heroes", () => {
  cy.get(".mat-card").should("have.length", 2);
});
