describe('Eight25 Media Website Tests', () => {

  it('Homepage Test - Validate Page Title', () => {
    cy.visit('https://www.eight25media.com/');
    cy.title().should('include', 'eight25');
  });

  it('Navigation Test - Go to Work Page & Verify', () => {
    cy.visit('https://www.eight25media.com/');
    cy.get('span.navbar-toggler-icon').parent('button').click();
    cy.contains('Work').click({ force: true });
    cy.contains('Our Work').should('be.visible');


    
  });

});
