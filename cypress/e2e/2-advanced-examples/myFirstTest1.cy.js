const navbarText = Cypress.env('navbarText');

context ('My First Test', () => {
    beforeEach(() => {
        cy.visit('/')
    })
      /*  it('has an h1 on the page', () => {
            cy.get('h1').should('exist');
            
        })
        it('renders the correct h1 test', () => {
            cy.get('h1').should('contain.text', 'Actions')
        })
        it('renders a paragraph under h1', () => {
            cy.get('.container').eq(1).find('p').should('exist')
        })
        it('renders a section with correct elements', () =>{
            cy.get('.container').eq(2).within(() =>{
                cy.get('h4').should('exist');
                cy.get('p').should('exist');
            })
        })*/
       it('correctly renders the cypress website link', () =>{
        cy.findByText(navbarText).should('exist')
       })
    })