
describe('making sure not to record dynamic id of elements', function () {
    beforeEach('precondition', () => {
      cy.visit("http://uitestingplayground.com/");
    });
  
    it('test1', () => {
        cy.contains('a', 'Dynamic ID').click();

        // Verify that the URL includes '/dynamicid'
        cy.location('pathname').should('include', '/dynamicid');

        cy.contains('Button with Dynamic ID').click();


    });
  });
  