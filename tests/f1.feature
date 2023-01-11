Background: user credentials
            | username | Admin |
            | password | admin@123 |
    
Feature: Login form
    Scenario: User try to login with credentials
    Given : That User enter username
    And : User enter password 
            | username | Admin |
            | password | admin@123 |
    And : User clicked on login button
    Then : User should be login to User Dashboard
    

    Scenario: User geting a authorization screen
    Given : User name and password
    #Background..............
    When : User try to login
    Then : User get a User authorization screen
    And : User accept or reject
    And : User get succefull login

    Scenario: User try to login with wrong credentials
    #Background................
    When : User enter wrong username
    And : User enter wrong password
    Then : User should be get an error screen 
    And : User get a message wrong credentials

    Scenario: User try to login without credenatials
    When : User not enter username 
    And : User not enter password
    And : User clicked on login button
    Then : User should get a message "Please Enter credentials"

    Scenario: User try to login without entering credentials 
    When : User not enter username
    And : User not enter password
    And : User clicked on login button
    Then : User should not get login successfully
    And : User get a warning message "Please Enter Credentials"

    





