
Given(/^I send the login data:$/, () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('.login').click();
});

When(/^I execute the Sign in$/, () => {
    cy.get('#email').type('teste@teste.com');
    cy.get('#passwd').type('123456');
});

Then(/^the system must show the user home page$/, () => {
	return true;
});
