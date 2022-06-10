Cypress.Commands.add("routeToSuperHeroView", () => {
  cy.wait(2000);
  cy.get(`[matTooltip='view super heroes']`).click();
});

Cypress.Commands.add("routeToSuperPowersView", () => {
  cy.wait(2000);
  cy.get(`[matTooltip='view super powers']`).click();
});

Cypress.Commands.add("returnToSignInView", () => {
  cy.get(".auth-prompt-container").contains("sign-in").click();
});
