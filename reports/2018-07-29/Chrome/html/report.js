$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Navigation.feature");
formatter.feature({
  "line": 2,
  "name": "Navigate site",
  "description": "As a user\r\nI want to navigate the menu of the website\r\nSo I can access all areas of the website",
  "id": "navigate-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@navigation"
    }
  ]
});
formatter.before({
  "duration": 279543,
  "status": "passed"
});
formatter.before({
  "duration": 1212986,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Navigate main menu",
  "description": "",
  "id": "navigate-site;navigate-main-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I want to navigate the main menu",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select \"\u003cmenu\u003e\" item",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be on \"\u003cmenu\u003e\" page",
  "rows": [
    {
      "comments": [
        {
          "line": 12,
          "value": "#Examples:"
        }
      ],
      "cells": [
        "menu"
      ],
      "line": 13
    },
    {
      "cells": [
        "About"
      ],
      "line": 14
    },
    {
      "cells": [
        "Home"
      ],
      "line": 15
    },
    {
      "cells": [
        "Blog"
      ],
      "line": 16
    },
    {
      "cells": [
        "Contact"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 117780,
  "status": "passed"
});
formatter.before({
  "duration": 52781,
  "status": "passed"
});
formatter.before({
  "duration": 379730,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Navigate archives menu",
  "description": "",
  "id": "navigate-site;navigate-archives-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I want to navigate the archives menu",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I select each menu and confirm it goes to the correct page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 34699,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 2,
  "name": "Search for articles",
  "description": "As a user\r\nI want to use search on website\r\nSo I can find articles relevant to my search",
  "id": "search-for-articles",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 52781,
  "status": "passed"
});
formatter.before({
  "duration": 501908,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Search term to find more than 1 articles",
  "description": "",
  "id": "search-for-articles;search-term-to-find-more-than-1-articles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I want to find many articles",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for \"test automation\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see search results for \"test automation\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "GoogleSearch_Steps.i_search_on_google()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 35187,
  "status": "passed"
});
formatter.before({
  "duration": 55713,
  "status": "passed"
});
formatter.before({
  "duration": 504840,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search term to find only 1 article",
  "description": "",
  "id": "search-for-articles;search-term-to-find-only-1-article",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I want to find only 1 article",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I search for \"python.org\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see only a single search result for \"python.org\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "GoogleSearch_Steps.i_search_on_google()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 28834,
  "status": "passed"
});
formatter.before({
  "duration": 46917,
  "status": "passed"
});
formatter.before({
  "duration": 533675,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search term to find no articles",
  "description": "",
  "id": "search-for-articles;search-term-to-find-no-articles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I want to find only no articles",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I search for \"nope\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see no articles found",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "GoogleSearch_Steps.i_search_on_google()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 28834,
  "status": "passed"
});
});