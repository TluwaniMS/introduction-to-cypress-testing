Cypress.Commands.add("createSuperHero", (name, superPowers) => {
  cy.get(`[formControlName='name']`).type(name);
  cy.get(`[formControlName='superPowers']`).select(superPowers);
  cy.get("button").contains("create").click();
});

Cypress.Commands.add("deleteSuperHero", (name) => {
  cy.get(`.mat-card`)
    .filter(`:contains(${name})`)
    .children(".mat-card-actions")
    .children("button")
    .click();
});
