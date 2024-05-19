import React = require('react')
import Header from '../../src/components/Header'

describe('<Header />', () => {
  it('Verifies that <Header /> renders', () => {
    cy.mount(<Header children={undefined} />)
  })

  it('Verifies that <Header /> renders children', () => {
    cy.mount(<Header children={<div>Children</div>} />)
  })

  it('Verifies that styles are correct', () => {
    cy.mount(<Header children={<div>Children</div>} />)
    cy.get('#header').should('have.css', 'background-color', 'rgb(167, 48, 48)')
    cy.get('#header').should('have.css', 'height', '70px')
  })
})