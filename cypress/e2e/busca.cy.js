/// <reference types="cypress"/>

describe('US-001-Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')

});

it('Deve buscar com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) => {
        cy.get('#search-input').type(filmes[1].titulo)
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', filmes[0].titulo)
    })
});

it.only('Deve buscar com sucesso de uma lista inteira', () => {
    cy.fixture('filmes').each((filmes) => {
        cy.get('#search-input').clear().type(filmes.titulo)
        cy.get('#search-button').click({ force: true })
        cy.get('#results-section').should('contain', filmes.titulo)
    })
});

});