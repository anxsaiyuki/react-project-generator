'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const constants = require('../../generators/app/constants');

describe('Generate frontend files', () => {
  it('create app.js if react router is selected', () => {
    return helpers
      .run(constants.APP_PATH)
      .withPrompts({
        reactRouter: true,
      })
      .then(() => {
        assert.fileContent([
          ["src/app.js", "import {BrowserRouter, Switch, Route} from 'react-router-dom'"],
          ["src/app.js", "<BrowserRouter>"],
          ["src/app.js", "<Switch>"],
          ["src/app.js", '<Route path="/" component={Index}/>'],
          ["src/app.js", "</BrowserRouter>"]
        ]);
      });
  });

  it('create app.js if react router is not selected', () => {
    return helpers
      .run(constants.APP_PATH)
      .withPrompts({
        reactRouter: false,
      })
      .then(() => {
        assert.fileContent([
          ["src/index.js", "import ReactDOM from 'react-dom';"]
        ]);
      });
  });
});
