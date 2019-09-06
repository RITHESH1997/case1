$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:launch/casestudy1/cart.feature");
formatter.feature({
  "name": "to search a product",
  "description": "  I want to search a product after logged in",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to login and search a product",
  "keyword": "Given "
});
formatter.step({
  "name": "I login \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "search a product by typing \"\u003csearch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click find details button",
  "keyword": "And "
});
formatter.step({
  "name": "products searched should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "search"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123",
        "Headphone"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to login and search a product",
  "keyword": "Given "
});
formatter.match({
  "location": "nr.i_want_to_login_and_search_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login \"Lalitha\" and \"Password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "nr.I_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search a product by typing \"Headphone\"",
  "keyword": "And "
});
formatter.match({
  "location": "nr.search_a_product_by_typing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click find details button",
  "keyword": "And "
});
formatter.match({
  "location": "nr.click_find_details_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "products searched should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "nr.products_searched_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:launch/casestudy1/case1.feature");
formatter.feature({
  "name": "This is to log in the user",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "registration process",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "name": "the user \"\u003cuser name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "he enters his first \"\u003cfirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his last\"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his pass\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his confirmpass\"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his gend\"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his email\"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his cont\"\u003ccontact num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his dob\"\u003cdob\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his add\"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his sec\"\u003csecurity question\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he enters his ans\"\u003canswer\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "he clicks on register button",
  "keyword": "Then "
});
formatter.step({
  "name": "the User is successfully registered",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user name",
        "first name",
        "last name",
        "password",
        "confirm password",
        "gender",
        "email",
        "contact num",
        "dob",
        "address",
        "security question",
        "answer"
      ]
    },
    {
      "cells": [
        "ritheshhhuulee",
        "rike",
        "salu",
        "123rike",
        "123rike",
        "male",
        "rikesalu@gmail.com",
        "9677342867",
        "21/08/1997",
        "1,main st,chennai",
        "1",
        "red"
      ]
    }
  ]
});
formatter.scenario({
  "name": "registration process",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "nonrun.the_browser_is_launched()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"ritheshhhuulee\"",
  "keyword": "When "
});
formatter.match({
  "location": "nonrun.the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his first \"rike\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_first(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his last\"salu\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_last(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his pass\"123rike\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_pass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his confirmpass\"123rike\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_confirmpass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his gend\"male\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_gend(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his email\"rikesalu@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his cont\"9677342867\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_cont(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his dob\"21/08/1997\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_dob(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his add\"1,main st,chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_add(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his sec\"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_sec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters his ans\"red\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.he_enters_his_ans(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he clicks on register button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the User is successfully registered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login page is displayed",
  "keyword": "Given "
});
formatter.step({
  "name": "i enter the \"\u003cUser name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i enter the user\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on the Login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "User name",
        "Password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login page is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "nonrun.login_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter the \"Lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "nonrun.i_enter_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter the user\"Password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "nonrun.i_enter_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "nonrun.clicks_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "nonrun.user_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:launch/casestudy1/direct.feature");
formatter.feature({
  "name": "to search a product directly",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user directly search by typing \"\u003csearch\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "click find details button",
  "keyword": "And "
});
formatter.step({
  "name": "the page is redirected to the login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "Headphone"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user directly search by typing \"Headphone\"",
  "keyword": "Given "
});
formatter.match({
  "location": "nrr.user_directly_search_by_typing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click find details button",
  "keyword": "And "
});
formatter.match({
  "location": "nr.click_find_details_button()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat launch.casestudy1.nr.click_find_details_button(nr.java:44)\r\n\tat ✽.click find details button(classpath:launch/casestudy1/direct.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the page is redirected to the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "nrr.the_page_is_redirected_to_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
});