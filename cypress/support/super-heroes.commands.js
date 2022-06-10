Cypress.Commands.add("createSuperHero", (name, superPower) => {
  cy.get(`[formControlName='name']`).type(name);

  cy.get(`.mat-select`).click().get("mat-option").contains(superPower).click();

  cy.get("button").contains("create").click({ force: true });
});

Cypress.Commands.add("deleteSuperHero", (name) => {
  cy.get(`.mat-card`)
    .filter(`:contains(${name})`)
    .children(".mat-card-actions")
    .children("button")
    .click();
});
