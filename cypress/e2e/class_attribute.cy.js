describe('class attributes may contain more than one class refrence', function () {
    beforeEach('precondition', () => {
      cy.visit("http://uitestingplayground.com/classattr");
    });
  
    it('test1', () => {
       cy.get('button.btn.btn-primary.btn-test').click();
       cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Primary button pressed');

const name = 'ph'

        // cy.get('#alert').contains('Primary button pressed');
        // cy.get('button').contains('OK').click();

        cy.get('button.btn.btn-warning.btn-test').click(); 
        cy.get('button.btn.btn-success.btn-test').click();

    });
  })});