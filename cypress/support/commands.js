Cypress.Commands.add("signIn", (email, password) => {
  cy.get(`[formControlName='email']`).type(email);
  cy.get(`[formControlName='password']`).type(password);
  cy.get("button").contains("submit").click();
});

Cypress.Commands.add("register", (email, password) => {
  cy.get('.auth-prompt-container').contains('register').click()
  cy.get(`[formControlName='email']`).type(email);
  cy.get(`[formControlName='password']`).type(password);
  cy.get(`[formControlName='passwordConfirmation']`).type(password);
  cy.get("button").contains("register").click();
});
