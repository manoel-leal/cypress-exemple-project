
import Login from '../../support/pages/Login/actions'
import Home from '../../support/pages/Home/actions'

Given(/^I send the login data:$/, (datatable) => {

    Home.clickSignInButton();

    datatable.hashes().forEach(login_data => {

        Login.typeEmailField(login_data.username);
        Login.typePasswordField(login_data.password);

    });

});


When(/^I execute the Sign in$/, () => {
    Login.clickButtonSubmitLogin();
});

Then(/^the system must show the user's name "([^"]*)" in home page$/, (user_name) => {
    Home.checkUserName(user_name);
});


Then(/^the system must show the failure message "([^"]*)"$/, (error_message) => {
    Home.checkMessageError(error_message);
});


