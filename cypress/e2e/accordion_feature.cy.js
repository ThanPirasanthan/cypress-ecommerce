
describe('allow elements to be moved using the mouse', function () {
    beforeEach('precondition', () => {
      cy.visit("https://www.way2automation.com/way2auto_jquery/accordion.php#load_box");
    });
  
    it.only('test1', () => {
        cy.get('#accordion > h3').eq(0).click();
        cy.get('#accordion > div').eq(0).should('be.visible').and('contain', 'Content for section 1.');
    
        // Collapse Section 1
        cy.get('#accordion > h3').eq(0).click();
        cy.get('#accordion > div').eq(0).should('not.be.visible');
    
        // Test Section 2
        cy.get('#accordion > h3').eq(1).click();
        cy.get('#accordion > div').eq(1).should('be.visible').and('contain', 'Content for section 2.');
    
        // Collapse Section 2
        cy.get('#accordion > h3').eq(1).click();
        cy.get('#accordion > div').eq(1).should('not.be.visible');
    });
  });
  