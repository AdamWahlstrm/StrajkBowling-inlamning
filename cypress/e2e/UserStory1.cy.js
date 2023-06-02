describe('Besök bokningssidan', () => {
  it('Öppnar bokningssidan', () => {
    cy.visit('http://localhost:5173/#'); // Byt ut URL:en om det behövs
    cy.get('.booking-info__heading').should('contain', 'When, WHAT & Who');
  });
});
