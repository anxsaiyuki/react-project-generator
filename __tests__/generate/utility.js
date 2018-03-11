'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const constants = require('../../generators/app/constants');

describe('Generate utility files', () => {
  it('create package.json', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['package.json']);
      });
  });

  it('create webpack', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['webpack.config.js']);
      });
  });

  it('create gitignore', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['.gitignore']);
      });
  });

  it('create gulp', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['gulpfile.js']);
      });
  });

  it('create flow config', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['.flowconfig']);
      });
  });
})
