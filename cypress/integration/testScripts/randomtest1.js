const configuration = {
    runOnly: {
        type: 'tag',
        values: ['wcag21aa','wcag21a'],
    }
};

describe('Login', function () {

    it('Visit LAMP site!', function() {
        cy.visit('https://photon-release.ntn.jadu.net/jadu/');
        cy.url().should('include', '/login');
        cy.get('input[name=username]')
            .type('admin');
        cy.get('input[name=password]')
            .type('Admin123');
        cy.contains('Sign In').click();
        cy.url().should('include', '/jadu');

        cy.wait(1000);

        // first a11y test
        cy.injectAxe();
        cy.checkA11y(configuration);
    });



});