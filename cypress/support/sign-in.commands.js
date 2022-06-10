Cypress.Commands.add("signIn", (email, password) => {
  cy.get(`[formControlName='email']`).type(email);
  cy.get(`[formControlName='password']`).type(password);
  cy.get("button").contains("submit").click();
});
