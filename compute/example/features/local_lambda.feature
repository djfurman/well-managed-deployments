@everything @will @be @alright
Feature: It tests using local lambda execution
    In order to effectively write lambdas in python
    As a developer
    I want to test my lambdas locally

    Scenario: Local Development
        Given an empty test event
        When a get UUID function is invoked
        Then it returns a UUID v4
