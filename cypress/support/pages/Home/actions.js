const elements = require('./elements').ELEMENTS;

class Home{

    clickSignInButton(){
        cy.get(elements.buttonSignIn).click();
    }

    checkUserName(user_name){
        cy.get(elements.accountUserName).should('contain', user_name);
    }

    checkMessageError(error_message){
        cy.get(elements.messageError).should('contain', error_message);
    }

}

export default new Home();