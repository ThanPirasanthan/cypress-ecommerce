

describe('launch_website and login', function () {
  beforeEach('precondition', () => {
cy.visit("https://www.way2automation.com/way2auto_jquery/");
  })
  
  it('test1',() => {
    cy.title('Welcome to the Test Site');

  })


  it('test2', () => {
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

  const CredDataSet = [
    { username: 'pj', 
      password: 'london'

    },
    { username: 'than', 
      password: 'london'

    },
    { username: 'ella', 
      password: 'london'

    },
  ]
 
  it.only('test3', () => {
    for(const cred of CredDataSet) {
      

      cy.get('a.fancybox[href="#login"]').click();
    cy.get('#login > #load_form > :nth-child(5) > input').type(cred.username);
    cy.get('#login > #load_form > :nth-child(6) > input').type(cred.password);
    cy.get(':nth-child(8) > .span_3_of_4 > :nth-child(1) > .fancybox').click();
    cy.visit("https://www.way2automation.com/way2auto_jquery/");
    }
    
'    // const username = Cypress.env('username')
    // const password = Cypress.env('password')
    // cy.get('a.fancybox[href="#login"]').click();
    // cy.get('#login > #load_form > :nth-child(5) > input').type(username);
    // cy.get('#login > #load_form > :nth-child(6) > input').type(password);
    // cy.get(':nth-child(8) > .span_3_of_4 > :nth-child(1) > .fancybox').click();'
    

})});

      
