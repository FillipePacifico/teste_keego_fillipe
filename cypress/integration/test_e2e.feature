Feature: Teste End to End
    
    Como usuário, desejo logar no site
    Para buscar produtos, adicionar ao carrinho e acessar a tela de pagamento

    Scenario: Fazer Login com sucesso
        Given acesso o site
        And clico no link de login
        When preencher os campos email e senha  com dados válidos
        And clico no botão de login
        Then devo visualizar a tela de usuário logado

    Scenario: Realizar busca
        Given digito o nome de um produto na barra de pesquisa
        When clico no ícone Lupa
        Then devo visualizar o produto a tela de resultado da busca
    
    Scenario: Incluir produto no carrinho
        Given clico no produto
        And acesso a página do produto
        When clico no botão Add to Cart
        And abre o modal de confirmação
        And devo visualizar o produto listado no modal
        And clico no botão Proceed to checkout
        And clico no botão Proceed to checkouts
        And valido o login
        And clico no botão Proceed to checkouta
        When marco o check box de aceite dos Termos de Serviço
        And clico no botão Proceed to checkoutsp
        Then devo visualizar o produto listado na tela de pagamento