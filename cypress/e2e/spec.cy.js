/// <reference types="cypress"/>

describe('US-02-Funcionalidade: Cadastro de membro', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Daniela')
    cy.get('#signup-lastname').type('Almeida')
    cy.get('#signup-email').type('daniela89@testes.com')
    cy.get('#signup-phone').type('71958748788')
    cy.get('#signup-password').type('Teste!2545')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})