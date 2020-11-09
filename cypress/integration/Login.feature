Feature: Login

              As a user, I want log in system
              For I can use the system features

        Scenario: Successfully log in
            Given I send the login data:
                  | username              | password |
                  | teste123456@teste.com | 123456   |
             When I execute the Sign in
             Then the system must show the user's name "Luís  Pietro Bento Monteiro" in home page

        Scenario: Failure log in
            Given I send the login data:
                  | username              | password |
                  | teste123456@teste.com | 123457   |
             When I execute the Sign in
             Then the system must show the failure message "Authentication failed."