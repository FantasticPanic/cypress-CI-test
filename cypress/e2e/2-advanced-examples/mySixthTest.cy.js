
context('My Sixth Test (using fixtures)', () =>{
   beforeEach(() =>{
    cy.fixture('example').then(function(data){

        this.data = data
        cy.log('THIS', data)
    })
   })

   it('uses fixture data in a network reques', function() {
    cy.visit('/commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) =>{
        cy.log('Response', res)
    })
   })
   
    it('pulls data from fixture', () =>{
        cy.fixture('example').then((data) => {
            cy.log('Data', data)
        })
    })

    it('updates fixture data in line', () => {
        cy.fixture('example').then((data) =>{
            data.email = 'updated@mail.com'
            cy.log('UPDATED', data)
        })
    })
})