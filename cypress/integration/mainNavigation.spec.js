describe('Verify main navigation links', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  ['mobile', 'desktop'].forEach(testType => {
    const initMobile = () => {
      if (testType === 'mobile') {
        cy.viewport('iphone-xr');
        cy.getBySel('display-main-menu').click();
      }
    };

    it(`Validate ${testType} About navigation`, () => {
      initMobile();

      cy.getBySel('go-to-about-page').should('be.visible').filter(':visible').click();

      cy.get('h1').should('be.visible').should('have.text', 'About me');
      cy.url().should('include', '/about');

      cy.getBySel('main-logo').click();
      cy.url().should('not.include', '/about');
    });

    it(`Validate ${testType} Projects navigation`, () => {
      initMobile();

      cy.getBySel('go-to-projects-page').should('be.visible').filter(':visible').click();

      cy.get('h1').should('be.visible').should('have.text', 'Projects');
      cy.url().should('include', '/projects');

      cy.getBySel('main-logo').click();
      cy.url().should('not.include', '/projects');
    });

    it(`Validate ${testType} Libs navigation`, () => {
      initMobile();

      cy.getBySel('go-to-libs-page').should('be.visible').filter(':visible').click();

      cy.get('h1').should('be.visible').should('have.text', 'Libs/Gists');
      cy.url().should('include', '/libs');

      cy.getBySel('main-logo').click();
      cy.url().should('not.include', '/libs');
    });

    it(`Validate ${testType} Contact navigation`, () => {
      initMobile();

      cy.getBySel('go-to-contact-page').should('be.visible').filter(':visible').click();

      cy.get('h1').should('be.visible').should('have.text', 'Get in Touch');
      cy.url().should('include', '/contact');

      cy.getBySel('main-logo').click();
      cy.url().should('not.include', '/contact');
    });
  });
});
