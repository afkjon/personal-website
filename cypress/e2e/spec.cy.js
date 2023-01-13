describe('personal website test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.loginByGoogleApi()
  });
  
  it('allows a user to login', () => {
    cy.visit('http://localhost:3000/enter');
    
    cy.get('button').contains('Sign in with Google');
  });

})