'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const constants = require('../../generators/app/constants');

describe('Generate frontend files', () => {
  it('create index.html', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['src/index.html']);
      });
  });

  it('create index.js', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['src/index.js']);
      });
  });

  it('create app.js if react router is selected', () => {
    return helpers
      .run(constants.APP_PATH)
      .withPrompts({
        reactRouter: true,
      })
      .then(() => {
        assert.file(['src/app.js']);
      });
  });

  it('create index.css', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['src/css/index.css']);
      });
  });

  it('create img.jpg', () => {
    return helpers
      .run(constants.APP_PATH)
      .then(() => {
        assert.file(['src/img/img.jpg']);
      });
  });

});
