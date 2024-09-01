context('My Fifth Test (using hooks)', () => {
    before(() => {
        cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)

    })

    beforeEach('visits the home page',() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.log('after each hook works')
    })

    after(() =>{
        cy.log('final hook runs here')
    })

    it('has an h1 on the page', () => {
        //cy.visit('/')
        cy.get('h1').should('exist')
    })

    it(' h1 renders correct text', () => {
        //cy.visit('/')
        cy.get('h1').should('contain.text', 'Kitchen Sink')
    })
})