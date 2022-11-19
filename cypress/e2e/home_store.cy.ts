describe('App home', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:3001')
    cy.contains('Home')
  })
})