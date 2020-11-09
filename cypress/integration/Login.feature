Feature: Login

              As a user, I want log in system
              For I can use the system features

        Scenario: Successfully log in
            Given I send the login data:
                  | email           | password |
                  | teste@teste.com | 123456   |
             When I execute the Sign in
             Then the system must show the user home page