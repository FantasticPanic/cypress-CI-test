context ('My Third Test', () => {

    it('shows an active class for current page', () => {

        cy.visit('/commands/actions')
        cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
    })

    it('should not have an active class on inactive pages', () => {
        cy.visit('commands/actions')
        cy.get('.dropdown-menu').find('li')
        .first().should('not.have.class', 'active')
        .find('a').should('have.attr','href','/commands/querying')
    })

})