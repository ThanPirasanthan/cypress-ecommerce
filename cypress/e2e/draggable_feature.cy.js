describe('drag and drop elements', function () {
    beforeEach('precondition', () => {
      cy.visit("https://www.way2automation.com/way2auto_jquery/draggable.php#load_box");
    });
  
    it.only('test1', () => {
      // Ensure the iframe is loaded
      cy.get('#example-1-tab-1 > .freme_box > .demo-frame')
      .iframe('#draggable')
      .should('exist')
    });
  });
  