import React from 'react';
import ContactForm from '../components/ContactForm';

describe('<ContactForm />', () => {
  beforeEach(() => {
    cy.mount(<ContactForm />);

    // Input Boxes
    cy.get('[name=name]').should('be.visible').as('nameInput');
    cy.get('[name=email]').should('be.visible').as('emailInput');
    cy.get('[name=message]').should('be.visible').as('msgInput');

    cy.get('button[type=submit]').as('submitBtn');
  });

  it('renders', () => {
    cy.get('form').within(() =>{
      // Labels should be visible
      cy.get('label').contains('Name').should('be.visible');
      cy.get('label').contains('Email').should('be.visible');
      cy.get('label').contains('Message').should('be.visible');

      cy.get('@nameInput').should('be.visible');
      cy.get('@emailInput').should('be.visible');
      cy.get('@msgInput').should('be.visible');

      cy.get('@submitBtn').should('be.visible');
    });
  })

  it('does not throw exceptions', () => {
    cy.get('@submitBtn').click();
    cy.get('@nameInput').type('TestName');
    cy.get('@submitBtn').click();
    cy.get('@emailInput').type('testemail');
    cy.get('@submitBtn').click();
    cy.get('@emailInput').clear().type('testemail@test');
    cy.get('@submitBtn').click();
    cy.get('@emailInput').clear().type('@test');
    cy.get('@submitBtn').click();
    cy.get('@emailInput').clear().type('test@email.com');
    cy.get('@submitBtn').click();
    cy.get('@msgInput').type('msg');
    cy.get('@submitBtn').click();
    cy.get('@msgInput').clear().type('A longer test message.');
    cy.get('@nameInput').clear();
    cy.get('@submitBtn').click();
  });

  it('sends the appropriate http message to the API server', () => {
    cy.get('@nameInput').type('testName');
    cy.get('@emailInput').type('test@email.com');
    cy.get('@msgInput').type('A valid test message.');

    cy.intercept("POST", "/api/contact", (req) => {
      const { body } = req

      if (
        !(body.hasOwnProperty('name') && body.name == 'testName') ||
        !(body.hasOwnProperty('email') && body.email == 'test@email.com') ||
        !(body.hasOwnProperty('message') && body.message == 'A valid test message.')
      ) {
        throw new Error('The ContactForm values are malformed on submission.');
      }
    })

    cy.get('@submitBtn').click();
  });

});