describe('My First Test', function() {
    it('Visit LAMP site!', function() {
       cy.visit('https://photon-release.ntn.jadu.net/jadu/');
        cy.url().should('include', '/login');
        cy.get('input[name=username]')
            .type('admin');
        cy.get('input[name=password]')
            .type('Admin123');
        cy.contains('Sign In').click();

        //Adding a document
        cy.contains('Publishing').click();
        cy.get('#publishing > .nav-items > :nth-child(2) > .nav-link > .nav-link__label').click();
        cy.get('.list_table_finish > .table_finish_curve > .btn').click();
        cy.get(':nth-child(1) > .generic_desc > p > label').type('Cypress Doc1');


//Assigning a category
     cy.get('#assignCategories').click();
     cy.get('#ac_category_list > ul > :nth-child(1) > a').click();
     cy.get('#apply_category');
     cy.get('.category_button').click();
     cy.get('.popunder > .modal__footer');
     cy.get('.modal__footer > .btn--primary').click();

//Adding metadata
     cy.get('#assignMetadata').click();
     cy.get('#description').type("Description Test");
     cy.get('#advanced_link').click();
     cy.get('.popunder > .modal__footer');
     cy.get('.modal__footer > .btn--primary').click();
     cy.get('span > .btn').click();

//Adding page content
     cy.get('.document_live > h4');
     cy.get('h4 > a').click();
     cy.get('.tabs__content');
     cy.get('#title').type("Page 1");
     cy.get('.generic_editor');
     cy.get('.cke_wysiwyg_frame').type("Some random texts");


    })
});