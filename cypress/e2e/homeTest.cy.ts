class Home {
    elements = {
        nameInput: () => cy.get('#name'),
        emailInput: () => cy.get('#email'),
        logoutBtn: () => cy.get('#logoutBtn'),
    }
}

const home = new Home();

describe('Home test', () => {

    //https://stackoverflow.com/questions/76462207/cypress-session-tests-not-working-for-the-second-time
    before(() => {
        cy.login('cliente@youdrive.com', 'password');
        cy.visit('http://localhost:5173/');
    });

    it('Testing if name field is filled', () => {
        home.elements.nameInput().should('have.value', 'Cliente');
    });

    it('Testing if email field is filled', () => {
        home.elements.emailInput().should('have.value', 'cliente@youdrive.com');
    });

    it('Testing logout', () => {
        home.elements.logoutBtn().trigger('mouseup');
    });
});