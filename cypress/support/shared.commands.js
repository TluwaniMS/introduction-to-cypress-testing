Cypress.Commands.add("signOut", () => {
  cy.get(`[matTooltip='sign out']`).click();
});

Cypress.Commands.add("confirmDeletion", () => {
  cy.get("button").contains("Confirm").click();
});
