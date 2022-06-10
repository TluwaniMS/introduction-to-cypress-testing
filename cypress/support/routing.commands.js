Cypress.Commands.add("routeToSuperHeroView", () => {
  cy.get(`[matTooltip='view super heroes']`).click();
});

Cypress.Commands.add("routeToSuperPowersView", () => {
  cy.get(`[matTooltip='view super powers']`).click();
});

Cypress.Commands.add("returnToSignInView", () => {
  cy.get(".auth-prompt-container").contains("sign-in").click();
});
