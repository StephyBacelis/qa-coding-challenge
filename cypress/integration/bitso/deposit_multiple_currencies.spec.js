describe('Scenario 1', () => {
    beforeEach('Login', () => {
        cy.visit('https://stage.bitso.com/login');

        cy.contains('Iniciar sesión');

        cy.get('#client_id')
            .type('stephanybacelis@gmail.com')
            .should('have.value', 'stephanybacelis@gmail.com');

        cy.get('#password')
            .type('Bacelis11.')
            .should('have.value', 'Bacelis11.');

        cy.get('form')
            .submit();

        cy.url()
            .should('include', '/wallet');
    });

    it('Deposit BTC', () => {
        cy.contains('Monedas');
        
        cy.wait(1500);
        
        cy.get('#btc')
            .parent()
            .click();

        cy.contains('Depositar')
            .click();

        cy.contains('Depositar Bitcoin');
        
        cy.wait(1500);

        cy.get('[data-testid=picker-item]')
            .first()
            .click();

        cy.get('.modal-content')
            .contains('¡Ups! Algo salió mal');
    });

    it('Deposit ETH', () => {
        cy.contains('Monedas');
        cy.wait(1500);

        cy.get('#eth')
            .parent()
            .click();

        cy.contains('Depositar')
            .click();

        cy.contains('Depositar Ether');

        cy.wait(1500);

        cy.get('[data-testid=picker-item]')
            .first()
            .click();

        cy.get('.modal-content')
            .contains('¡Ups! Algo salió mal');
    });

    it('Deposit BCH', () => {
        cy.contains('Monedas');
        cy.wait(1500);
        
        cy.get('#bch')
            .parent()
            .click();

        cy.contains('Depositar')
            .click();

        cy.contains('Depositar Bitcoin cash');

        cy.wait(1500);

        cy.get('[data-testid=picker-item]')
            .first()
            .click();

        cy.get('.modal-content')
            .contains('¡Ups! Algo salió mal');
    });

    it('Deposit DAI', () => { 
        cy.contains('Monedas');
        cy.wait(1500);
        
        cy.get('#dai')
            .parent()
            .click();

        cy.contains('Depositar')
            .click();

        cy.contains('Depositar Dai');

        cy.wait(1500);

        cy.get('[data-testid=picker-item]')
            .first()
            .click();

        cy.get('.modal-content')
            .contains('¡Ups! Algo salió mal');
    });

    it('Deposit XRP', () => {
        cy.contains('Monedas');
        cy.wait(1500);
        
        cy.get('#xrp')
            .parent()
            .click();

        cy.contains('Depositar')
            .click();

        cy.contains('Depositar XRP');

        cy.wait(1500);

        cy.get('[data-testid=picker-item]')
            .first()
            .click();

        cy.get('.modal-content')
            .contains('¡Ups! Algo salió mal');
    });

    it('Deposit MANA', () => { 
        cy.contains('Monedas');
        cy.wait(1500);
        
        cy.get('#mana')
            .parent()
            .click();

        cy.contains('Depositar')
            .click();

        cy.contains('Depositar MANA');

        cy.wait(1500);

        cy.get('[data-testid=picker-item]')
            .first()
            .click();

        cy.get('.modal-content')
            .contains('¡Ups! Algo salió mal');
    });
    
});
