const configuration = {
    runOnly: {
        type: 'tag',
        values: ['cat.color'],
    }
};

const test_url = 'https://lamp72.cms.ntn.jadu.net/jadu';
const user_name = 'admin';
const password = 'Admin123';

describe('Login', function () {
    beforeEach(() => {
        cy.visit(test_url);
        cy.url().should('include', '/login');
        cy.get('input[name=username]').type(user_name);
        cy.get('input[name=password]').type(password);
        cy.contains('Sign In').click();
        cy.wait(1000);

    });

    it('Visit the Rupa Appliances page', function () {
        cy.visit(test_url + '/rupa/rupa_appliances.php');
        cy.url().should('include', '/rupa/rupa_appliances.php');

        //first a11y test
        cy.injectAxe(configuration);
        cy.checkA11y(null, configuration, (violations) => {
            violations.forEach((violation) => {
                cy.task('log', '    FAILURE');
                cy.task('log', '    Description: ' + violation.description);
                violation.nodes.forEach((nodes) => {
                    cy.log(nodes.failureSummary);
                    cy.task('log', '        ' + nodes.failureSummary);
                    cy.task('log', '        ' + nodes.html);
                });
            });
        });


    });

    it('Create Appliance detail', function () {
        cy.visit(test_url + '/rupa/rupa_appliances.php');
        cy.get('.u-float-right > .btn').click();
        cy.get('#applianceTitle').type('Appliance');
        cy.get('#siteSearchID').type('008761012967040484347:2cyyqnsuygd');
        cy.get('#applianceDefaultCollection').type('Default Collection');
        cy.get('#applianceFailoverID').select('4').should('have.value','4');
        cy.get('#live').select('Yes');

        cy.injectAxe(configuration);
        cy.checkA11y(null, configuration, (violations) => {
            violations.forEach((violation) => {
                cy.task('log', '    FAILURE');
                cy.task('log', '    Description: ' + violation.description);
                violation.nodes.forEach((nodes) => {
                    cy.log(nodes.failureSummary);
                    cy.task('log', '        ' + nodes.failureSummary);
                    cy.task('log', '        ' + nodes.html);
                });
            });
        });

        cy.get('span > .btn').click();

    });

    it('Visit the Collection list page', function () {
        cy.visit(test_url + '/rupa/rupa_collections.php');
        cy.url().should('include', '/rupa/rupa_collections.php');

        //first a11y test
        cy.injectAxe(configuration);
        cy.checkA11y(null, configuration, (violations) => {
            violations.forEach((violation) => {
                cy.task('log', '    FAILURE');
                cy.task('log', '    Description: ' + violation.description);
                violation.nodes.forEach((nodes) => {
                    cy.log(nodes.failureSummary);
                    cy.task('log', '        ' + nodes.failureSummary);
                    cy.task('log', '        ' + nodes.html);
                });
            });
        });

    });

    it('Create Coolection details', function () {
        cy.visit(test_url + '/rupa/rupa_collections.php');
        cy.get('.u-float-right > .btn').click();
        //first a11y test
            cy.injectAxe(configuration);
            cy.checkA11y(null, configuration, (violations) => {
                violations.forEach((violation) => {
                    cy.task('log', '    FAILURE');
                    cy.task('log', '    Description: ' + violation.description);
                    violation.nodes.forEach((nodes) => {
                        cy.log(nodes.failureSummary);
                        cy.task('log', '        ' + nodes.failureSummary);
                        cy.task('log', '        ' + nodes.html);
                    });
                });
            });

    });


    it('Visit Rename Result URLS', function () {
        cy.visit(test_url + '/rupa/search_rename_result_urls.php');


        //first a11y test
        cy.injectAxe(configuration);
        cy.checkA11y(null, configuration, (violations) => {
            violations.forEach((violation) => {
                cy.task('log', '    FAILURE');
                cy.task('log', '    Description: ' + violation.description);
                violation.nodes.forEach((nodes) => {
                    cy.log(nodes.failureSummary);
                    cy.task('log', '        ' + nodes.failureSummary);
                    cy.task('log', '        ' + nodes.html);
                });
            });
        });

    });

    it('Create Rename URL details', function () {

        cy.visit(test_url + '/rupa/search_rename_result_urls.php');
        cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click();

        //first a11y test
        cy.injectAxe(configuration);
        cy.checkA11y(null, configuration, (violations) => {
            violations.forEach((violation) => {
                cy.task('log', '    FAILURE');
                cy.task('log', '    Description: ' + violation.description);
                violation.nodes.forEach((nodes) => {
                    cy.log(nodes.failureSummary);
                    cy.task('log', '        ' + nodes.failureSummary);
                    cy.task('log', '        ' + nodes.html);
                });
            });
        });

    });

    it('Create Rename URL details', function () {

        cy.visit(test_url + '/rupa/search_rename_result_urls.php');
        cy.get('.u-float-right > .btn').click();
        cy.get('#fromPattern').type('10.02.002.001');
        cy.get('#replaceWith').type('www.jadu.net');

        //first a11y test
        cy.injectAxe(configuration);
        cy.checkA11y(null, configuration, (violations) => {
            violations.forEach((violation) => {
                cy.task('log', '    FAILURE');
                cy.task('log', '    Description: ' + violation.description);
                violation.nodes.forEach((nodes) => {
                    cy.log(nodes.failureSummary);
                    cy.task('log', '        ' + nodes.failureSummary);
                    cy.task('log', '        ' + nodes.html);
                });
            });
        });

        cy.get('span > .btn').click();

    });


});