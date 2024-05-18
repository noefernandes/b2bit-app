class LoginForm {
  elements = {
    emailInput: () => cy.get('#email'),
    emailErrorFeedback: () => cy.get('#emailErrorFeedback'),
    passwordInput: () => cy.get('#password'),
    passwordErrorFeedback: () => cy.get('#passwordErrorFeedback'),
    submitBtn: () => cy.get('button[type=submit]'),
  }

  typeEmail(text: string) {
    if (!text) return;
    this.elements.emailInput().type(text)
  }

  typePassword(text: string) {
    if (!text) return;
    this.elements.passwordInput().type(text)
  }
}

const loginForm = new LoginForm();

describe('Login test', () => {

  after(() => {
    cy.clearAllLocalStorage();
  })

  const input = {
    email: '',
    password: '',
  }

  it('Testint redirect', () => {
    cy.visit('/')
  })

  it('Testing login input', () => {
    loginForm.typeEmail(input.email)
  })

  it('Testing password input', () => {
    loginForm.typePassword(input.password)
  })

  it('Submitting form', () => {
    loginForm.elements.submitBtn().click()
  })

  it('Testing error message from email input', () => {
    loginForm.elements.emailErrorFeedback().should('contains.text', 'Email Address is required!');
  })

  it('Testing error message from password input', () => {
    loginForm.elements.passwordErrorFeedback().should('contains.text', 'Password is required!');
  })
})