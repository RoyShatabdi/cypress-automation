// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('loginByCSRF', () => {
    cy.request(Cypress.env('baseUrl') + '/login')
        .its('body')
        .then((body) => {
            const $html = Cypress.$(body);
            const csrf = $html.find('input[name=_csrf_token]').val();
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl') + '/login',
                failOnStatusCode: false,
                form: true,
                body: {
                    '_username': Cypress.env('admin_email'),
                    '_password': Cypress.env('admin_password'),
                    '_csrf_token': csrf,
                },
            });
        });
});