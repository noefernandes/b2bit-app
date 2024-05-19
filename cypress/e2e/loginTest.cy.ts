class LoginForm {
  elements = {
    emailInput: () => cy.get('#email'),
    emailErrorFeedback: () => cy.get('#emailErrorFeedback'),
    passwordInput: () => cy.get('#password'),
    passwordErrorFeedback: () => cy.get('#passwordErrorFeedback'),
    submitErrorFeedback: () => cy.get('#submitErrorFeedback'),
    submitBtn: () => cy.get('#submitBtn'),
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

const input = {
  email: '',
  password: '',
}

describe('Login test: error on e-mail input', () => {

  it('Testint redirect', () => {
    cy.visit('/login')
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
})

describe('Login test: error on password input', () => {

  it('Testint redirect', () => {
    cy.visit('/login')
  })

  it('Testing login input', () => {
    loginForm.typeEmail(input.email)
  })

  it('Submitting form', () => {
    loginForm.elements.submitBtn().click()
  })

  it('Testing error message from password input', () => {
    loginForm.elements.passwordErrorFeedback().should('contains.text', 'Password is required!');
  })
})

describe('Login test: error on both inputs', () => {

  it('Testint redirect', () => {
    cy.visit('/login')
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

describe('Login Test: wrong credentials', () => {

  it('Testint redirect', () => {
    cy.visit('/login')
  })

  it('Filling up with wrong credentials', () => {
    loginForm.typeEmail('wrongEmail@mail.com')
    loginForm.typePassword('wrongPassword')
  })

  it('Submitting form', () => {
    loginForm.elements.submitBtn().click()
  })

  it('Testing if error message is displayed', () => {
    loginForm.elements.submitErrorFeedback().should('contains.text', 'Wrong credentials. Please try again.')
  })
})