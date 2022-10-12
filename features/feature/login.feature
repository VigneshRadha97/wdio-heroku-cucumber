Feature: This is to test wdio with cucumber framework in "The Heroku App"

    Background:
        Given the user is on login page

    Scenario: Login heroku using valid credentials
        When user logs in using username as "tomsmith" and password as "SuperSecretPassword!"
        Then user clicks on the login button
        And user must navigate to secure area page displaying a message "You logged into a secure area!"

    Scenario Outline: Login heroku with invalid credentials
        When user logs in using username as "<username>" and password as "<password>"
        Then user clicks on the login button
        And user must remain on the same login page displaying a message "<error message>"

        Examples:
            | username | password             | errormessage      |
            | tom      | SuperSecretPassword! | invalid username! |
            | tomsmith | secretpass           | invalid password! |