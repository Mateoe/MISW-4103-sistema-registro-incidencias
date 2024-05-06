Feature: Editar tag

@user1 @web
Scenario: Edición de tag en ghost
  Given I navigate to page "https://ghost-5ehz.onrender.com/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "test@test.com"
  And I wait for 1 seconds
  And I enter password "Test@test25"
  And I wait for 1 seconds
  And I click login
  And I wait for 3 seconds
  And I click on the Tags link
  And I wait for 1 seconds
  And I click on tag element with name "tag-name"
  And I wait for 1 seconds
  And I edit tag-slug "edited-slug"
  And I wait for 1 seconds
  And I click save
  And I wait for 1 seconds
  And I click on the Tags link
  And I wait for 1 seconds
  Then I validate that the tag was created "edited-slug"
  And I wait for 1 seconds
  And I sign out
  And I wait for 1 seconds




