const token = 'abcd123'

context('My Seventh Test (using custom commands)', () =>{
    beforeEach(() =>{
        cy.fixture('example').then(function(data){
    
            this.data = data
            cy.log('THIS', data)
        })
       })

       it('sets a token in local storage', () => {
        cy.setLocalStorage('token', 'token')
        cy.getLocalStorage('token').should('eq', 'token')
       })

       it('overwrites the type commands by using sensitive characters', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('text@email.com', {sensitive: true})
        cy.findByPlaceholderText('Email').type('text@email.com')
    })

     /*  it('gets a token from local storage', () => {
        cy.getLocalStorage('token').should('eq', '')
       })*/
})