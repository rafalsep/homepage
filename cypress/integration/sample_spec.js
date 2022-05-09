describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('/').get('main').injectAxe();
    cy.get('[data-test-id="avatar"]').should('be.visible');
  });

  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y();
  });
});
