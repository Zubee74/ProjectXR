Feature: Test addition using Google Calculator


  Scenario Outline: Test 2 number addition
    Given Open google.com Calculator
    When Entering number <firstNumber> and <secondNumber>
    And Press enter
    Then Result should be <result>

    Examples:
      | firstNumber | secondNumber | result |
      | 6           | 6            | 12     |
      | 6           | 2            | 9      |
      | 8           | 5            | 13     |


Scenario Outline: Test 2 number multiplication
    Given Open google.com Calculator
    When Entering number <firstNumber> and <secondNumber>
    And Press enter
    Then Result should be <result>

    Examples:
        | firstNumber | secondNumber | result |
        | 4           | 3            | 12     |

Scenario Outline: Test 3 number addition
    Given Open google.com Calculator
    When Entering number <firstNumber> and <secondNumber>
    And Press enter
    Then Result should be <result>
    And Entering number <thiredNumber>
    And Add <result> with <thiredNumber>
    Then Result should be <result>

    Examples:
        | firstNumber | secondNumber | thiredNumber | result |
        | 2           | 4            | 4           | 10     |
#firstNumber + secondNumber = result
#result + thiredNumber = result
    
Scenario Outline: Scenario Outline name