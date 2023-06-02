describe('Booking', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');

    cy.get('.shoes__button').as('addButton').click().click();

    cy.get('.shoes__input').eq(0).type('41');

    cy.get('.shoes__input').eq(1).type('44');

    cy.get('.shoes__button--small').last().click();

    cy.get('.shoes_input').should('have.length', 1);
  });
});
