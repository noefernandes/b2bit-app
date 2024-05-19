export { }

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>
        }
    }
}

Cypress.Commands.add('login', (email: string, password: string) => {
    cy.session([email, password], () => {
        cy.visit('http://localhost:5173/login');
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#submitBtn').click();
        cy.url().should('eq', 'http://localhost:5173/');
    })
})