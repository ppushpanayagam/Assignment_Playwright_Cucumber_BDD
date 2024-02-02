Feature: Verify Playstation page

# Background:
#     Given the user log into Sony application with valid credentials 
#     When the user select playstation from the menu
#     Then the user should be redirected  to playstation application

  @dev
  @smoke
  @regression
  Scenario: Successfully land on Playstation page
    Given the user on the play station page
    Then the user should see the required slides

#   Scenario: Successfully verify required carousel slides are displayed
#     Given the user on the playstation application home page
#     When the user verify the all the carousel slides
#     Then the carousel slides should be displayed  as expected 

# Scenario: Successfully verify displayed banner based on carousel slides
#     Given the user on the playstation application home page
#     When the user select the slides only by one
#     Then the user should see the corresponding banner above the slide

# Scenario: Successfully verify the tiles selection and non selected slides
#     Given the user on the playstation application home page
#     When the user select a specific tiles
#     Then the user should see the corresponding banner for the selected tiles
#     And the user should see the other slides shouldn’t be selected

# Scenario: Successfully verify the tiles spin automatically 
#     When the user on the playstation application home page
#     Then the carousel slides should move one by one automatically 
#     And the user should see the corresponding big banner based on the slide move