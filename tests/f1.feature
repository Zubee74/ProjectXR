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

    Scenario: Uer try to login with wrong credenatials
    When : User enter username 
    And : User enter password
    And : User clicked on login button
    Then : User get a warning message "Credentilas not matched"
    And : User get opetions for forget password

    Example: Credentilas
     | username | Admin1 |
     | password | admin@1234 |

    Scenario: User forget password 
    When : User try to enter username and password
    And  : User forget the password 
    Then : User clicked on forget password
    Then : Ask for user to enter the old password 
    And : re-enter the same password and username
    And : User clicked on change password
    Then : User get successful password changed

    Scenario: User login with OTP
    When : User forget username and password
    And : User clicked on login with OTP
    And : User asked for enter email or number
    And : User clicked get OTP
    Then : User get a otp by his email or number
    And : User enter OTP and submit
    Then : User get succefull login to account

    

    



    
    





