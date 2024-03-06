describe('My First Test', () => {
    it('Searching using a postcode', () => {
      cy.visit('https://www.denplan.co.uk/')

      cy.get('#onetrust-button-group #onetrust-accept-btn-handler').click()
  
      cy.get('.navbar__top-nav__container [href="https://www.denplan.co.uk/patients/find-a-denplan-dentist"]').click()
      
      cy.get('#button-1091411454-1').click()

      cy.get('#location').click().type("SP10")

      cy.get('button#practiceSearch').click()

      cy.get('#fapMap')
    })
  })