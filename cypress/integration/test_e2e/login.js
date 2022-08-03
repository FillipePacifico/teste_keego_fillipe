Given(/^acesso o site$/, () => {
	cy.visit('/')
});

When(/^clico no link de login$/, () => {
	cy.get('.login').click();
});

When(/^preencher os campos email e senha  com dados válidos$/, () => {
	cy.login();
});

When(/^clico no botão de login$/, () => {
	cy.get('#SubmitLogin').click();
});

Then(/^devo visualizar a tela de usuário logado$/, () => {
	cy.get(".info-account").should("contain", "Welcome to your account. Here you can manage all of your personal information and orders.");
});
