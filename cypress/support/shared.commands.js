Cypress.Commands.add("signOut", () => {
  cy.get(`[matTooltip='sign out']`).click();
});

Cypress.Commands.add("createContent", () => {
  cy.get(`[matTooltip='create']`).click();
});

Cypress.Commands.add("confirmDeletion", () => {
  cy.get("button").contains("Confirm").click();
});

Cypress.Commands.add("selectContentType", (contentType) => {
  cy.get("button").contains(contentType).click();
});
