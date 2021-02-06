describe('Pokedex', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('open single pokemon page', () => {
    cy.visit('http://localhost:5000')
    cy.get('[href="/pokemon/pikachu"]').click()
    cy.get('.pokemon-name').contains('pikachu')
  })
})
