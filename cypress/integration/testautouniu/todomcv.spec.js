///<reference types='cypress'/>

it('should able to add new to list mvcapp', () => {

    cy.visit('https://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', { timeout: 6000 }).type("Study Python{enter}")

    cy.get('label').should('have.text', 'Study Python')
    cy.get('.toggle').should('not.be.checked')

    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    cy.contains('Clear', { timeout: 6000 }).click()
    cy.get('.todo-list').should('not.have.descendants', 'li')

})

