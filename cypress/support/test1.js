describe('Login', function() {
    it('Visits login page', function() {
        cy.visit('https://rbwm.test1.cxm.ntn.jadu.net/q/login')
        cy.url().should('include', '/login')
        cy.get('input[name=_username]').type('jadu@hq.jadu.net')
        cy.get('input[name=_password]').type(`Admin123!{enter}`)
        cy.contains('All cases')
    })

});
