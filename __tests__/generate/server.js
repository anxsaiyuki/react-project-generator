'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const constants = require('../../generators/app/constants');

describe('Generate server files', () => {
  it('create server', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['server/server.js']);
      });
  });

  // it('create server routes', () => {
  //   return helpers
  //     .run(constants.APP_PATH)
  //     .withPrompts({
  //       serverRouter: true,
  //       routerName: '',
  //     })
  //     .then(() => {
  //       assert.file(['server/router/user.js']);
  //     });
  // });
});
