$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WebdriverUniversity.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying features for webdriveruniversity.com",
  "description": "",
  "id": "verifying-features-for-webdriveruniversity.com",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To verify Login-Portal function",
  "description": "",
  "id": "verifying-features-for-webdriveruniversity.com;to-verify-login-portal-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@LoginPortal"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to webdriveruniversity website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I clicked on Login Portal link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I type Username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I type password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can be able to log in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verifying-features-for-webdriveruniversity.com;to-verify-login-portal-function;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "verifying-features-for-webdriveruniversity.com;to-verify-login-portal-function;;1"
    },
    {
      "cells": [
        "abcd",
        "Testing12345$"
      ],
      "line": 15,
      "id": "verifying-features-for-webdriveruniversity.com;to-verify-login-portal-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1043600,
  "status": "passed"
});
formatter.before({
  "duration": 723400,
  "status": "passed"
});
formatter.before({
  "duration": 544600,
  "status": "passed"
});
formatter.before({
  "duration": 372800,
  "status": "passed"
});
formatter.before({
  "duration": 346700,
  "status": "passed"
});
formatter.before({
  "duration": 345700,
  "status": "passed"
});
formatter.before({
  "duration": 297300,
  "status": "passed"
});
formatter.before({
  "duration": 302700,
  "status": "passed"
});
formatter.before({
  "duration": 299000,
  "status": "passed"
});
formatter.before({
  "duration": 416200,
  "status": "passed"
});
formatter.before({
  "duration": 815500,
  "status": "passed"
});
formatter.before({
  "duration": 419600,
  "status": "passed"
});
formatter.before({
  "duration": 238500,
  "status": "passed"
});
formatter.before({
  "duration": 211300,
  "status": "passed"
});
formatter.before({
  "duration": 240700,
  "status": "passed"
});
formatter.before({
  "duration": 196300,
  "status": "passed"
});
formatter.before({
  "duration": 222500,
  "status": "passed"
});
formatter.before({
  "duration": 429800,
  "status": "passed"
});
formatter.before({
  "duration": 474700,
  "status": "passed"
});
formatter.before({
  "duration": 668800,
  "status": "passed"
});
formatter.before({
  "duration": 907200,
  "status": "passed"
});
formatter.before({
  "duration": 699300,
  "status": "passed"
});
formatter.before({
  "duration": 986400,
  "status": "passed"
});
formatter.before({
  "duration": 421800,
  "status": "passed"
});
formatter.before({
  "duration": 252300,
  "status": "passed"
});
formatter.before({
  "duration": 270800,
  "status": "passed"
});
formatter.before({
  "duration": 305600,
  "status": "passed"
});
formatter.before({
  "duration": 730300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "To verify Login-Portal function",
  "description": "",
  "id": "verifying-features-for-webdriveruniversity.com;to-verify-login-portal-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@LoginPortal"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to webdriveruniversity website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I clicked on Login Portal link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I type Username \"abcd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I type password \"Testing12345$\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can be able to log in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPortalTest.i_go_to_webdriveruniversity_website()"
});
formatter.result({
  "duration": 23809169900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPortalTest.i_clicked_on_Login_Portal_link()"
});
formatter.result({
  "duration": 464106400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 17
    }
  ],
  "location": "LoginPortalTest.i_type_Username(String)"
});
formatter.result({
  "duration": 4321017500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing12345$",
      "offset": 17
    }
  ],
  "location": "LoginPortalTest.i_type_password(String)"
});
formatter.result({
  "duration": 174325100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPortalTest.i_click_login_button()"
});
formatter.result({
  "duration": 152788000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPortalTest.i_can_be_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 17341300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPortalTest.user_close_the_Browser()"
});
formatter.result({
  "duration": 498758700,
  "status": "passed"
});
formatter.before({
  "duration": 626400,
  "status": "passed"
});
formatter.before({
  "duration": 378100,
  "status": "passed"
});
formatter.before({
  "duration": 357600,
  "status": "passed"
});
formatter.before({
  "duration": 318900,
  "status": "passed"
});
formatter.before({
  "duration": 309300,
  "status": "passed"
});
formatter.before({
  "duration": 309800,
  "status": "passed"
});
formatter.before({
  "duration": 342900,
  "status": "passed"
});
formatter.before({
  "duration": 291400,
  "status": "passed"
});
formatter.before({
  "duration": 296700,
  "status": "passed"
});
formatter.before({
  "duration": 303900,
  "status": "passed"
});
formatter.before({
  "duration": 280300,
  "status": "passed"
});
formatter.before({
  "duration": 338400,
  "status": "passed"
});
formatter.before({
  "duration": 368400,
  "status": "passed"
});
formatter.before({
  "duration": 335000,
  "status": "passed"
});
formatter.before({
  "duration": 262400,
  "status": "passed"
});
formatter.before({
  "duration": 268500,
  "status": "passed"
});
formatter.before({
  "duration": 330700,
  "status": "passed"
});
formatter.before({
  "duration": 915400,
  "status": "passed"
});
formatter.before({
  "duration": 330200,
  "status": "passed"
});
formatter.before({
  "duration": 267200,
  "status": "passed"
});
formatter.before({
  "duration": 264800,
  "status": "passed"
});
formatter.before({
  "duration": 297600,
  "status": "passed"
});
formatter.before({
  "duration": 329600,
  "status": "passed"
});
formatter.before({
  "duration": 350400,
  "status": "passed"
});
formatter.before({
  "duration": 339100,
  "status": "passed"
});
formatter.before({
  "duration": 337200,
  "status": "passed"
});
formatter.before({
  "duration": 274100,
  "status": "passed"
});
formatter.before({
  "duration": 298100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To verify WebElement Click function",
  "description": "",
  "id": "verifying-features-for-webdriveruniversity.com;to-verify-webelement-click-function",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@WebElementClick"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am in  Button Clicks page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click WebElement click me",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "press close",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the modal Congratulations should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "WebElementClickTest.i_am_in_Button_Clicks_page()"
});
formatter.result({
  "duration": 13698052800,
  "status": "passed"
});
formatter.match({
  "location": "WebElementClickTest.i_click_WebElement_click_me()"
});
formatter.result({
  "duration": 4470611700,
  "status": "passed"
});
formatter.match({
  "location": "WebElementClickTest.press_close()"
});
formatter.result({
  "duration": 2139853000,
  "status": "passed"
});
formatter.match({
  "location": "WebElementClickTest.the_modal_Congratulations_should_be_closed()"
});
formatter.result({
  "duration": 5541319000,
  "status": "passed"
});
formatter.before({
  "duration": 318500,
  "status": "passed"
});
formatter.before({
  "duration": 263400,
  "status": "passed"
});
formatter.before({
  "duration": 214200,
  "status": "passed"
});
formatter.before({
  "duration": 201100,
  "status": "passed"
});
formatter.before({
  "duration": 313600,
  "status": "passed"
});
formatter.before({
  "duration": 293400,
  "status": "passed"
});
formatter.before({
  "duration": 311100,
  "status": "passed"
});
formatter.before({
  "duration": 263500,
  "status": "passed"
});
formatter.before({
  "duration": 212100,
  "status": "passed"
});
formatter.before({
  "duration": 204900,
  "status": "passed"
});
formatter.before({
  "duration": 269000,
  "status": "passed"
});
formatter.before({
  "duration": 265400,
  "status": "passed"
});
formatter.before({
  "duration": 322100,
  "status": "passed"
});
formatter.before({
  "duration": 252400,
  "status": "passed"
});
formatter.before({
  "duration": 345100,
  "status": "passed"
});
formatter.before({
  "duration": 268400,
  "status": "passed"
});
formatter.before({
  "duration": 476300,
  "status": "passed"
});
formatter.before({
  "duration": 491000,
  "status": "passed"
});
formatter.before({
  "duration": 989800,
  "status": "passed"
});
formatter.before({
  "duration": 448500,
  "status": "passed"
});
formatter.before({
  "duration": 630100,
  "status": "passed"
});
formatter.before({
  "duration": 447200,
  "status": "passed"
});
formatter.before({
  "duration": 469000,
  "status": "passed"
});
formatter.before({
  "duration": 845900,
  "status": "passed"
});
formatter.before({
  "duration": 361200,
  "status": "passed"
});
formatter.before({
  "duration": 596800,
  "status": "passed"
});
formatter.before({
  "duration": 327300,
  "status": "passed"
});
formatter.before({
  "duration": 349600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To verify JavaScript Click function",
  "description": "",
  "id": "verifying-features-for-webdriveruniversity.com;to-verify-javascript-click-function",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@JavaScriptClick"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is in  Button Clicks page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click JavaScript Click \u003cclick me\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify that the string is present with some message",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "close the pop window",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the modal \u003cIt’s that Easy!! Well I think it is\u003eshould be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "JavaScriptClickTest.user_is_in_Button_Clicks_page()"
});
formatter.result({
  "duration": 11666485600,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptClickTest.i_click_JavaScript_Click_click_me()"
});
formatter.result({
  "duration": 4453947600,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptClickTest.i_verify_that_the_string_is_present_with_some_message()"
});
formatter.result({
  "duration": 3074778300,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptClickTest.close_the_pop_window()"
});
formatter.result({
  "duration": 2247108300,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptClickTest.the_modal_It_s_that_Easy_Well_I_think_it_is_should_be_closed()"
});
formatter.result({
  "duration": 1354202800,
  "status": "passed"
});
formatter.before({
  "duration": 510200,
  "status": "passed"
});
formatter.before({
  "duration": 369800,
  "status": "passed"
});
formatter.before({
  "duration": 370400,
  "status": "passed"
});
formatter.before({
  "duration": 283400,
  "status": "passed"
});
formatter.before({
  "duration": 294700,
  "status": "passed"
});
formatter.before({
  "duration": 317600,
  "status": "passed"
});
formatter.before({
  "duration": 314100,
  "status": "passed"
});
formatter.before({
  "duration": 306500,
  "status": "passed"
});
formatter.before({
  "duration": 339700,
  "status": "passed"
});
formatter.before({
  "duration": 327900,
  "status": "passed"
});
formatter.before({
  "duration": 309200,
  "status": "passed"
});
formatter.before({
  "duration": 307300,
  "status": "passed"
});
formatter.before({
  "duration": 294900,
  "status": "passed"
});
formatter.before({
  "duration": 345700,
  "status": "passed"
});
formatter.before({
  "duration": 324500,
  "status": "passed"
});
formatter.before({
  "duration": 518100,
  "status": "passed"
});
formatter.before({
  "duration": 328700,
  "status": "passed"
});
formatter.before({
  "duration": 316600,
  "status": "passed"
});
formatter.before({
  "duration": 335900,
  "status": "passed"
});
formatter.before({
  "duration": 311400,
  "status": "passed"
});
formatter.before({
  "duration": 290100,
  "status": "passed"
});
formatter.before({
  "duration": 279200,
  "status": "passed"
});
formatter.before({
  "duration": 306500,
  "status": "passed"
});
formatter.before({
  "duration": 296900,
  "status": "passed"
});
formatter.before({
  "duration": 314200,
  "status": "passed"
});
formatter.before({
  "duration": 333500,
  "status": "passed"
});
formatter.before({
  "duration": 316200,
  "status": "passed"
});
formatter.before({
  "duration": 427700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "To verify Action Move \u0026 Click function",
  "description": "",
  "id": "verifying-features-for-webdriveruniversity.com;to-verify-action-move-\u0026-click-function",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@ActionMoveClick"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User Clicks on Button page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click Action Move \u0026 Click \u003cclick me\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click on close button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the modal should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ActionMoveClickTest.user_Clicks_on_Button_page()"
});
