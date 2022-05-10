xdescribe('Verify accessibility', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
  });

  it('Verify index page accessibility', () => {
    cy.visit('/');
    cy.get('main').injectAxe();
    cy.checkA11y();
  });

  it('Verify about page accessibility', () => {
    cy.visit('/about');
    cy.get('main').injectAxe();
    cy.checkA11y();
  });

  it('Verify projects page accessibility', () => {
    cy.visit('/projects');
    cy.get('main').injectAxe();
    cy.checkA11y();
  });

  it('Verify libs page accessibility', () => {
    cy.visit('/libs');
    cy.get('main').injectAxe();
    cy.checkA11y();
  });

  it('Verify contact page accessibility', () => {
    cy.visit('/contact');
    cy.get('main').injectAxe();
    cy.checkA11y();
  });
});
