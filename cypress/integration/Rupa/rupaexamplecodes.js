cy.log(cy.get('tbody').children().its('length').is('gte', 0));
if (cy.get('tbody').length > 0) {

    cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click();

} else {
    // cy.visit(test_url + '/rupa/search_rename_result_urls.php');

    cy.get('.u-float-right > .btn').click();

}
