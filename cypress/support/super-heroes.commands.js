Cypress.Commands.add("createSuperHero", (name, superPowers) => {
  cy.get(`[matTooltip='create']`).click();
  cy.get("button").contains("Super Hero").click();
  cy.get(`[formControlName='name']`).type(name);
  cy.get("button").contains("create").click();
});

Cypress.Commands.add("deleteSuperHero", (name) => {
  cy.get(`.mat-card`)
    .filter(`:contains(${name})`)
    .children(".mat-card-actions")
    .children("button")
    .click();
});
