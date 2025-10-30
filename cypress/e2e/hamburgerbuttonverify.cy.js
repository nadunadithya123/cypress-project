describe('Responsive Mobile Check - Hamburger Menu', () => {

  it('Hamburger menu is visible on mobile', () => {
    cy.viewport(375, 667);
    cy.visit('https://www.eight25media.com/');
    cy.get('img[alt="Revisit consent button"]').should('be.visible');
  });

});
