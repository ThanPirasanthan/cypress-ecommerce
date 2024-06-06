
describe('launch_website', function () {
    it('test1', () => {

      cy.visit("https://www.saucedemo.com")
      cy.title().should('eq' , 'Swag Labs')
    })
  })