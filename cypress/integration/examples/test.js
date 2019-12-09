describe('Create case', () => {
    it('Checking accessibility on the create case form', () => {
        cy.loginByCSRF();
        cy.visit(Cypress.env('baseUrl') + '/cases/create');
        cy.get('.select2-container').click();
        cy.contains('.select2-results__option', 'Library').click();
        cy.get('.js-create-case-form').submit();
        cy.injectAxe();
        cy.checkA11y();
    });
});