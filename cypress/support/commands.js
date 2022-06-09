Cypress.Commands.add("signIn", (email, password) => {
  cy.get(`[formControlName='email']`).type(email);
  cy.get(`[formControlName='password']`).type(password);
  cy.get("button").contains("submit").click();
});

Cypress.Commands.add("register", (email, password) => {
  cy.get(".auth-prompt-container").contains("register").click();
  cy.get(`[formControlName='email']`).type(email);
  cy.get(`[formControlName='password']`).type(password);
  cy.get(`[formControlName='passwordConfirmation']`).type(password);
  cy.get("button").contains("register").click();
});

Cypress.Commands.add("signOut", () => {
  cy.get(`[matTooltip='sign out']`).click();
});

Cypress.Commands.add("createSuperHero", (name, superPowers) => {
  cy.get(`[matTooltip='create']`).click();
  cy.get("button").contains("Super Hero").click();
  cy.get(`[formControlName='name']`).type(name);
  cy.get("button").contains("create").click();
});

Cypress.Commands.add("createSuperPower", (power, description) => {
  cy.get(`[matTooltip='create']`).click();
  cy.get("button").contains("Super Power").click();
  cy.get(`[formControlName='power']`).type(power);
  cy.get(`[formControlName='description']`).type(description);
  cy.get("button").contains("Create").click();
});
