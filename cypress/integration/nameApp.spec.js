describe('Testing name app', () => {
	it('displays correct content when started', () => {
		cy.visit('/')
		cy.contains('Hi, mse-2103-e!')
		cy.contains("What's your name?")
		cy.get('#name-input').should('be.visible');
		cy.get('#name-submit').should('be.visible');
	})

	it('enter a name, displays it in new page', () => {
		cy.visit('/');
		cy.get('#name-input').type('Antony');
		cy.get('#name-submit').click();
		cy.url().should('include', '/name');
		cy.contains('Hello there Antony!');
	})
})
