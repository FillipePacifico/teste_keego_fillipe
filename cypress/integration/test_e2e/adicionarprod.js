Given(/^clico no produto$/, () => {
	cy.get('a.product_img_link > img').click();
});

When(/^acesso a página do produto$/, () => {
	cy.get('h1').should("contain", "Blouse")
});

When(/^clico no botão Add to Cart$/, () => {
    cy.get('#add_to_cart > button').click();
});

When(/^abre o modal de confirmação$/, () => {
	cy.wait(10000);
	cy.get(".layer_cart_product > h2").should("contain", "Product successfully added to your shopping cart");
});

When(/^devo visualizar o produto listado no modal$/, () => {
	cy.get('#layer_cart_product_title').should("contain", "Blouse");
});


When(/^clico no botão Proceed to checkout$/, () => {
	cy.get("a[class='btn btn-default button button-medium']").click();
});

When(/^clico no botão Proceed to checkouts$/, () => {
	cy.get("a[class='button btn btn-default standard-checkout button-medium']").click();
});

When(/^valido o login$/, () => {
	cy.login();
	cy.get('#SubmitLogin').click();
});

When(/^clico no botão Proceed to checkouta$/, () => {
	cy.get("button[class='button btn btn-default button-medium']").click();
});

When(/^marco o check box de aceite dos Termos de Serviço$/, () => {
	cy.get("#cgv").check();
});

When(/^clico no botão Proceed to checkoutsp$/, () => {
	cy.get("button[class='button btn btn-default standard-checkout button-medium']").click();
});

Then(/^devo visualizar o produto listado na tela de pagamento$/, () => {
	cy.get(".product-name").should("contain", "Blouse");
});
