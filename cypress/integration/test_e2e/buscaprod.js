Given(/^digito o nome de um produto na barra de pesquisa$/, () => {
	cy.get("#search_query_top").type("blouse");   
});

When(/^clico no ícone Lupa$/, () => {
	cy.get("#searchbox > .btn").click();
});

Then(/^devo visualizar o produto a tela de resultado da busca$/, () => {
	cy.get(".product-count").should("contain", "Showing");
});
