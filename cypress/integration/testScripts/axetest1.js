const configuration = {
    runOnly: {
        type: 'tag',

        values: ['wcag21aa', 'wcag21a', 'wcag2aa', 'wcag2a', 'best-practice'],
    }
};

describe('visit page', () => {
    it('Visits the page', function() {
        cy.visit('https://stellar-photon.ntn.jadu.net/');
        cy.injectAxe();
        cy.checkA11y(configuration);
    })
});

