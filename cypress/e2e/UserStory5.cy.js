describe('Booking', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');

    cy.get('.navigation .navigation__icon').click();

    it('det ska gå att klicka på navicon', () => {
      cy.get('.navigation__link').should('have.length', 2);
    });

    it('Correct Path', () => {
      cy.get('.navigation__link').last().click();
      cy.location('pathname').should('include', '/confirmation');
    });

    it('Correct Path', () => {
      cy.get('.navigation__link').first().click();
      cy.location('pathname').should('include', '/#');
    });
  });
});
