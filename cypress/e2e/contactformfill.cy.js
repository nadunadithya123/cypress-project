describe('Eight25 Media Website Tests', () => {

  it('Contact Form Fill Test', () => {

    cy.visit('https://www.eight25media.com/');
    cy.get('span.navbar-toggler-icon').parent('button').click();
    cy.contains('Let’s talk').click({ force: true });
    cy.get('#your-name').type('Test User');
    cy.get('#your-email').type('testuser@example.com');
    cy.get('#your-phone').type('1234567890');
    cy.get('[name="your-message"]').type('This is a test message');


  });

});
