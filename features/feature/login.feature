Feature: This is to test wdio with cucumber framework in "The Heroku App"

    Background:
        Given the user is on login page

    Scenario: Login heroku using valid credentials
        When user logs in using username as "tomsmith" and password as "SuperSecretPassword!"
        Then user clicks on the login button
        And user must navigate to secure area page displaying a message "You logged into a secure area!"