///<reference types='cypress'/>


it('should tab the whole page', () => {

    cy.visit('https://design.hq.jadu.net/newham/prototypes/v2/2-home-page.html')

    Cypress.Commands.add('typeTab', (shiftKey, ctrlKey) => {
        cy.focused().trigger('keydown', {
            keyCode: 9,
            which: 9,
            shiftKey: shiftKey,
            ctrlKey: ctrlKey
        });
    });

})