describe('Login', () => {
  
  it('Logar professor com sucesso!', () =>{
    cy.visit('http://127.0.0.1:5500/templates/login.html');
    cy.get('#id_email_login').type('professor@teste.com');
    cy.get('#id_senha_login').type('1');

    cy.get('#id_submit_login').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('Login realizado com sucesso, seja bem vindo! professor@teste.com');
    });
  });

  it('Logar professor com falha de senha!', () =>{
    cy.visit('http://127.0.0.1:5500/templates/login.html');
    cy.get('#id_email_login').type('professor@teste.com');
    cy.get('#id_senha_login').type('erro');

    cy.get('#id_submit_login').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('A senha está incorreta!');
    });
  });


  it('Logar aluno com sucesso!', () =>{
    cy.visit('http://127.0.0.1:5500/templates/login.html');
    cy.get('#id_email_login').type('aluno@teste.com');
    cy.get('#id_senha_login').type('1');

    cy.get('#id_submit_login').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('Login realizado com sucesso, seja bem vindo! aluno@teste.com');
    });
  });

  it('Logar professor com falha de senha!', () =>{
    cy.visit('http://127.0.0.1:5500/templates/login.html');
    cy.get('#id_email_login').type('aluno@teste.com');
    cy.get('#id_senha_login').type('erro');

    cy.get('#id_submit_login').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('A senha está incorreta!');
    });
  });

  it('Logar com email não cadastrado!', () =>{
    cy.visit('http://127.0.0.1:5500/templates/login.html');
    cy.get('#id_email_login').type('teste@teste.com');
    cy.get('#id_senha_login').type('1');

    cy.get('#id_submit_login').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('O email teste@teste.com Não está cadastrado!');
    });
  });
});

describe('Cadastro', () => {
  it('Cadastrar professor com sucesso', () =>{
    cy.visit('http://127.0.0.1:5500/templates/cadastro.html');
    cy.get('#id_nome_professor').type('Professor');
    cy.get('#id_email_professor').type('professor_Teste@teste.com');
    cy.get('#id_senha_professor').type('Senha_Valida');

    cy.get('#submit_cadastro_professor').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('O professor Professor Foi cadastrado com sucesso!');
    });
  });

  it('Cadastrar aluno com sucesso', () =>{
    cy.visit('http://127.0.0.1:5500/templates/cadastro.html');
    cy.get('#id_nome_aluno').type('Aluno Teste');
    cy.get('#id_email_aluno').type('aluno_Teste@teste.com');
    cy.get('#id_senha_aluno').type('Senha_Valida');

    cy.get('#submit_cadastro_aluno').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('O aluno Aluno Teste Foi cadastrado com sucesso!');
    });
  });

  it('Cadastrar professor com email já cadastrado', () =>{
    cy.visit('http://127.0.0.1:5500/templates/cadastro.html');
    cy.get('#id_nome_professor').type('Professor');
    cy.get('#id_email_professor').type('professor@teste.com');
    cy.get('#id_senha_professor').type('Senha_Valida');

    cy.get('#submit_cadastro_professor').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('O email professor@teste.com já está cadastrado!');
    });
  });

  it('Cadastrar aluno com email já cadastrado', () =>{
    cy.visit('http://127.0.0.1:5500/templates/cadastro.html');
    cy.get('#id_nome_aluno').type('Aluno Teste');
    cy.get('#id_email_aluno').type('aluno@teste.com');
    cy.get('#id_senha_aluno').type('Senha_Valida');

    cy.get('#submit_cadastro_aluno').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('O email aluno@teste.com já está cadastrado!');
    });
  });

  it('Cadastrar professor com senha invalida', () =>{
    cy.visit('http://127.0.0.1:5500/templates/cadastro.html');
    cy.get('#id_nome_professor').type('Professor');
    cy.get('#id_email_professor').type('professor_teste@teste.com');
    cy.get('#id_senha_professor').type('erro');

    cy.get('#submit_cadastro_professor').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('A senha escolhida é invalida!');
    });
  });

  it('Cadastrar aluno com senha invalida', () =>{
    cy.visit('http://127.0.0.1:5500/templates/cadastro.html');
    cy.get('#id_nome_aluno').type('Aluno Teste');
    cy.get('#id_email_aluno').type('aluno_teste@teste.com');
    cy.get('#id_senha_aluno').type('erro');

    cy.get('#submit_cadastro_aluno').click();

    cy.on('window:alert', (mensagem) => {
      const valorAlerta = mensagem;
      expect(valorAlerta).to.equal('A senha escolhida é invalida!');
    });
  });

});