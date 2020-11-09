const elements = require('./elements').ELEMENTS;

class Login {

    typeEmailField(email){
        cy.get(elements.fieldEmail).type(email);
    }

    typePasswordField(password){
        cy.get(elements.fieldPassword).type(password);
    }

    clickButtonSubmitLogin(){
        cy.get(elements.buttonSubmitLogin).click();
    }


}

export default new Login();