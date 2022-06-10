Cypress.Commands.add("createSuperPower", (power, description) => {
  cy.get(`[formControlName='power']`).type(power);
  cy.get(`[formControlName='description']`).type(description);
  cy.get("button").contains("Create").click();
});

Cypress.Commands.add("deleteSuperPower", (name) => {
  cy.get(`.mat-card`)
    .filter(`:contains(${name})`)
    .children(".mat-card-actions")
    .children("button")
    .click();
});
