Feature: Verify Playstation page carousel slides

Background: Successfully log into Sony application
    Given the user log into Sony application with valid credentials 
    When the user select playstation from the menu
    Then the user should be redirected  to playstation application
  
  Scenario: Successfully verify expected carousel slides are displayed
    When the user on the playstation home page
    Then the carousel slides should be displayed as expected 
  
  Scenario: Successfully verify displayed banner based on carousel slides selection
    Given the user on the playstation home page
    When the user select the slides only by one
    Then the user should see the corresponding banner above the slide
  @dev
  Scenario: Successfully verify the slide selection and non selected slides
    Given the user on the playstation home page
    When the user select a specific tiles from carousel slides
    Then the user should see the corresponding banner for the selected tiles
    And the user should see the other slides should not be selected

Scenario: Successfully verify auto rotation of the carousel slides
    When the user on the playstation home page
    Then the carousel slides should move one by one automatically 
    And the user should see the corresponding big banner based on the slide move