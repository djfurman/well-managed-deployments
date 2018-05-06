@number7
Feature: Change orders

    For changes of any kind to occur to the production envionrment, they need to be documented, logged and approved
    As an engineer, I need to be able to quickly and easily log change orders and prioritize them
    As a manager, I need to see change orders logged by my staff and approve/deny/schedule their execution
    As an auditor, I need to see changes executed in accordance with approved change orders

    Scenario: Create change order
        Given a valid manual change order
        When the change is submitted
        Then the change order should be stored in the database
        And the response should have a created status code
        And the response should have a location header
        And the response should include the change order id
