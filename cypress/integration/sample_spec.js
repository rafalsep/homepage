describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('/');
    cy.get('[data-test-id="avatar"]').should('be.visible');
  });
});
