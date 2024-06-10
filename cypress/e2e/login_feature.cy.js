

describe('launch_website and login', function () {
  beforeEach('precondition', () => {
cy.visit("https://www.way2automation.com/way2auto_jquery/");
  })
  
  it('test1', () => {
      cy.get('input[name="name"]').type('Firstname');
      cy.get('input[name="phone"]').type('Lastname');
      cy.get('input[name="email"]').type('testing@example.com');
      cy.get('select').select('Algeria');
      cy.get('select').contains('Algeria');
      cy.get('input[name="city"]').type('london');
      cy.get(':nth-child(10) > input').type('Username1234');
      cy.get(':nth-child(11) > input').type('Test1234!');
      cy.get(':nth-child(12) > .span_1_of_4 > .button').click();
      cy.get('#alert').contains('This is just a dummy form, you just clicked SUBMIT BUTTON');
  });

  it('test2',() => {
    cy.title('Welcome to the Test Site');

  })


});

      
  