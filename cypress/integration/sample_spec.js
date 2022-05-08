describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:8000');
    cy.viewport('iphone-x');

    cy.get('[data-test="avatar"]').should('be.visible');
    cy.get('[data-test="menu-projects"]').click();
  });
});
