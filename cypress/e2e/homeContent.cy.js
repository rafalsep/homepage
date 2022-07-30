describe('Verify index page content', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-xr');
  });

  it(`Validate home section`, () => {
    cy.getBySel('avatar').should('be.visible');
    cy.get('h1').should('be.visible').should('have.length', 1);

    cy.getBySel('home-github-link').should('be.visible');
    cy.getBySel('home-linkedin-link').should('be.visible');
    cy.getBySel('home-gmail-link').should('be.visible');
  });

  it(`Validate projects section`, () => {
    cy.getBySel('projects-section').should('be.visible').find('h2').should('have.length', 1).should('contain.text', 'Projects');
    cy.getBySel('projects-gallery').should('be.visible').children().filter(':visible').should('have.length', 3);
    cy.getBySel('projects-learn-more').should('be.visible');
    cy.getBySel('projects-learn-more').click();
    cy.url().should('include', '/projects');
  });

  it(`Validate projects section gallery`, () => {
    cy.getBySel('projects-gallery')
      .should('be.visible')
      .children()
      .filter(':visible')
      .find('a')
      .each((projectLink, projectLinkIndex) => {
        cy.getBySel('project-gallery-link').eq(projectLinkIndex).click({ force: true });
        cy.url().should('include', '/projects');
        cy.get('h1').should('be.visible').should('have.text', 'Projects');
        cy.go('back');
      });
  });

  it(`Validate about section`, () => {
    cy.getBySel('about-section').should('be.visible').find('h2').should('have.length', 1).should('contain.text', 'About me');
  });

  it(`Validate libs section`, () => {
    cy.getBySel('libs-section').should('be.visible').find('h2').should('have.length', 1).should('contain.text', 'Libs/Gists');
    cy.getBySel('libs-showcase').should('be.visible').children().filter(':visible').should('have.length', 3);
    cy.getBySel('libs-learn-more').should('be.visible');
    cy.getBySel('libs-learn-more').click();
    cy.url().should('include', '/libs');
  });

  it(`Validate contact section`, () => {
    let submitted = false;
    cy.getBySel('contact-me-form').invoke('submit', e => {
      // do not actually submit the form
      e.preventDefault();
      submitted = true;
    });

    cy.getBySel('contact-section').should('be.visible').find('h2').should('have.length', 1).should('contain.text', 'Get in Touch');
    cy.getBySel('contact-me-form')
      .within(() => {
        cy.get('input[name="name"]').should('be.empty').type('John Doe').should('have.value', 'John Doe');
        cy.get('input[name="email"]').should('be.empty').type('testemail@gmail.com').should('have.value', 'testemail@gmail.com');
        cy.get('input[name="subject"]').should('be.empty').type('Yo!').should('have.value', 'Yo!');
        cy.get('textarea[name="message"]').should('be.empty').type('Some random message').should('have.value', 'Some random message');
        cy.get('button[type="submit"]').click();
      })
      .then(() => {
        expect(submitted, 'form submitted').to.eq(true);
      });
  });

  it(`Validate Links are not broken on page`, () => {
    cy.get("a:not([href*='mailto:]']").each($el => {
      if ($el.prop('href').length > 0) {
        const message = $el.text();
        expect($el, message).to.have.attr('href').not.contain('undefined');
      }
    });
  });
});
