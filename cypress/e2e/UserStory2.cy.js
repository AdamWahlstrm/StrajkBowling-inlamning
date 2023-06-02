describe('Booking', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Should be possible to add one pair of shoes', () => {
    cy.get('.shoes__button').click();
    cy.get('.shoes__form').should('be.visible');
    cy.get('.input__field.shoes__input').type('43').should('have.value', '43');
  });

  it('Should be possible to add more than one shoe', () => {
    cy.get('.shoes__button').click();
    cy.get('.shoes__form').should('be.visible');
    cy.get('.input__field.shoes__input').type('43').should('have.value', '43');
    cy.get('.shoes__button').eq(1).click();
    cy.get('.input__field.shoes__input')
      .eq(1)
      .type('41')
      .should('have.value', '41');
  });
});
