import Card from './Card'

describe('<Card />', () => {
    it('Verifies that <Card /> renders', () => {
        cy.mount(<Card children={undefined} />)
    })

    it('Verifies that <Card /> renders children', () => {
        cy.mount(<Card children={<div>Children</div>} />)
    })

    it('Verifies that styles are correct', () => {
        cy.mount(<Card children={<div>Children</div>}
            height='h-[300px]' width='w-[300px]' bgColor='bg-[#FFFFFF]'
            boxShadow='shadow-[0_0_64px_0#00000040]]' margin='mr-10' />)

        cy.get('#card').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('#card').should('have.css', 'border-radius', '18px')
        cy.get('#card').should('have.css', 'width', '300px')
        cy.get('#card').should('have.css', 'height', '300px')
        cy.get('#card').should('have.css', 'box-shadow')
        cy.get('#card').should('have.css', 'margin-right', '40px')
    })
})