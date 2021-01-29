//Test for order form component
describe('Order Form Test', () => {

    it('Can add text to name input', () => {
        cy.visit('localhost:3000/pizza')
        .get('input[name=name]')
        .type('Randle')
        .should('have.value','Randle');
    });

    it('Can select and unselect each topping', () => {
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked');
    });

    it('Can submit form', () => {
        cy.get('button')
        .click()
        .get('input[name=name]')
        .should('have.value','');
    });
})