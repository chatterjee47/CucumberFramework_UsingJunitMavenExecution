Feature: Verifying features for demoqa.com

  @Checkbox
  Scenario: To verify Check box function
    Given I go to 'https://demoqa.com/elements'
    And I click check box
    When I click the home accordion button to expand it
    And I click the downloads accordion button to expand it
    And I tick Word File.doc
    Then the section should be ticked

  @Radiobutton
  Scenario: To verify Radio button function
    Given I go to Radio button
    When I click on Impressive
    Then the message 'You have selected Impressive' shall be shown
    And I verify the message 'You have selected Impressive' is shown

  @WebTables
  Scenario Outline: To verify Web Tables function
    Given I go to Web Tables
    When I click on Add button
    And I type in First name "<First Name>"
    And I type Last Name "<Last Name>"
    And I type Email"<Email>"
    And I type Age"<Age>"
    And I type Salary"<Salary>"
    And I type Department"<Department>"
    And I click Submit
    Then I can verify that typed in info has shown up in the page

    Examples: 
      | First Name | Last Name | Email                | Age | Salary | Department |
      | Name1      | Name2     | prototype@email.com  |  50 |    500 | abcd123    |
      | Name2      | Name2     | prototype2@email.com |  50 |    511 | abcd125    |
      | Name3      | Name2     | prototype3@email.com |  50 |    521 | abcd134    |
      | Name4      | Name2     | prototype4@email.com |  50 |    532 | abcd583    |
      | Name5      | Name2     | prototype5@email.com |  50 |    534 | abcd923    |

  @ButtonsKeyword
  Scenario: To verify Buttons Keyword function
    Given I go to Buttons
    When I double click on Double Click Me button
    And I right click on right Click Me button
    Then I can verify that the following info has shown up in the page  'You have done a double click'

 @AlertsFrameWindowsBrowserwindows
  Scenario: To verify Alerts, Frame ,Windows function
Given I go to AlertsFrameWindows
And I click Browser windows
When I click new window
And I click away the new window
Then the new window should close

  @AlertsFrameWindowsNestedFrames
  Scenario: To verify Alerts, Frame & Windows function
    Given I go to Alerts, Frame & Windows
    When I click Nested Frames
    Then I can verify the Child Iframe message is present on the page
    And I can verify the Parent frame message is present on the page

  @WidgetsAccordian
  Scenario: To verify Widgets Accordian function
    Given I go to Widgets
    And I click on Accordian
    When I click 'What is Lorem Ipsum?'
    And I click 'Where does it come from?'
    And I click 'Why do we use it?'
    Then the accordian 'Why do we use it?' should expand

  @WidgetsDatePicker
  Scenario: To verify Widgets Date Picker function
    Given I go Widgets
    And I click on Date Picker
    When I click DateANDTime
    And I click on month 'March'
    And I click on 'year'
    Then the date and time should be selected

  @admindemoWebSiteFeature
 Scenario Outline: To verify admin demo WebSite Feature function
    Given I log into admin demo with "<UserName>" "<Password>"
    And I open Products from Catalog in a new tab
    And I close the previous tab
    And I open Customer Roles from Customers in a new separate smaller window
    And I close the previous Products tab
    And in the smaller window I click on Online customers
    And I make the smaller window bigger by maximizing it
    
     Examples: 
      | UserName               | Password  | 
      | admin@yourstore.com    | admin     | 
