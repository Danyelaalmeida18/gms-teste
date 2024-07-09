/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membro', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `daniela${Date.now()}@teste.com`
    cy.preencherCadastro('daniela', 'Almeida', email, '71958476214', 'Teste!3030' )
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com campo nome inválido', () => {
    cy.preencherCadastro('daniela50', 'Almeida', 'daniela@teste.com', '71958476214', 'Teste!3030')
    cy.get('#signup-response'.should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços'))
  });

  it('Deve validar mensagem de erro com campo email inválido', () => {
    cy.preencherCadastro('daniela', 'Almeida', 'daniela.teste.com', '71958476214', 'Teste!3030')
    cy.get('#signup-response'.should('contain', 'E-mail deve ser um email válido'))
   
  });

  it('Deve validar mensagem de erro com campo nome inválido', () => {
    cy.preencherCadastro('daniela', 'Almeida', 'daniela@teste.com', 'adseee', 'teste!3030')
    cy.get('#signup-response'.should('contain', 'Telefone deve conter apenas números'))
  });

  it('Deve validar mensagem de erro com campo senha', () => {
    cy.preencherCadastro('daniela', 'Almeida', 'daniela@teste.com', '71958476214', 'teste!3030')
    cy.get('#signup-response'.should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*'))
   
  });







})