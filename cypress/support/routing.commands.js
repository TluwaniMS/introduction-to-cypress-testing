Cypress.Commands.add("routeToSuperHeroView", () => {
  cy.wait(2000);
  cy.get(`[matTooltip='view super heroes']`).click();
});

Cypress.Commands.add("routeToSuperPowersView", () => {
  cy.wait(2000);
  cy.get(`[matTooltip='view super powers']`).click();
});

Cypress.Commands.add("goToSignInView", () => {
  cy.get(".auth-prompt-container").contains("sign-in").click();
});

Cypress.Commands.add("goToRegistrationView", () => {
  cy.get(".auth-prompt-container").contains("register").click();
});
