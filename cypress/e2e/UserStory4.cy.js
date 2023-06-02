describe('Booking', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');

    cy.get('input[name="when"]').clear().type('2023-06-02');
    cy.get('input[name="time"]')().type('18:00');
    cy.get('input[name="people"]').clear().type('4');
    cy.get('input[name="lanes"]').clear().type('1');

    cy.get('.shoes_button').as('addButton').click().click().click().click();

    cy.get('.shoes__input').eq(0).type('42');
    cy.get('.shoes__input').eq(1).type('44');
    cy.get('.shoes__input').eq(2).type('41');
    cy.get('.shoes__input').eq(3).type('39');

    cy.get('.booking__button').click();

    cy.wait(2000);

    cy.url().should('include', '/confirmation');
    cy.get('.confirmation__price').should('contain', 'Total:');
    cy.get('.input__label').eq(3).should('have.text', 'Booking number');
  });
});
