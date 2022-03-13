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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("Open_Booking_App", function () {
    cy.visit('/')
    cy.wait(2000)
});

Cypress.Commands.add("Enter_Std_Data", function () {
    
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe2')
    cy.get('#totalprice').type('100')
    cy.get('#depositpaid').select('true')
    cy.get('#checkin').type('2022-02-25')
    cy.get('#checkout').type('2022-02-27')
    
});

Cypress.Commands.add("Get_POST_Req", function () {
    cy.intercept('POST', '/booking').as('postReq')
});

Cypress.Commands.add("Save_Btn", function () {
    cy.get('input[value=" Save "]')
});