
describe('Scenario 2', () => {
    before('Login', () => {
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

    it('Add Beneficiary', () => {

        cy.get('.moon-menu_lines')
            .click();

        cy.contains('Cynthia Stephany')
            .parent()
            .click();

        cy.get('a[href*="/r/user/overview"]')
            .first()
            .click();
        
        cy.contains('Resumen de cuenta');

        cy.get('a[href*="/r/user/beneficiaries"]')
            .click();

        cy.contains('Personas beneficiarias');

        cy.contains('Agregar')
            .click();

        cy.url()
            .should('include', '/beneficiaries/add');
        
        cy.get('#first_name')
            .type('Zack');

        cy.get('#last_name')
            .type('Thompson');

        cy.get('#second_last_name')
            .type('Williams');

        cy.get('[name=day]')
            .parent()
            .click();

        // 3
        cy.get('#react-select-3-option-2')
            .click();

        cy.get('[name=month]')
            .parent()
            .click();

        // Enero
        cy.get('#react-select-4-option-0')
            .click();

        cy.get('[name=year]')
            .parent() 
            .click();

        // 1990
        cy.get('#react-select-5-option-32')
            .click();

        cy.get('[name=relationship]')
            .parent()
            .click();
         
        // Conocido
        cy.get('#react-select-6-option-1')
            .click();

        cy.get('[name=percentage]')
            .parent()
            .type('100');

        cy.get('form')
            .submit();

        cy.get('#pin')
            .type('4542');

        cy.contains('button', 'Confirmar')
            .click();

        cy.get('[type=error]')
            .contains('NIP incorrecto');
    });
});
