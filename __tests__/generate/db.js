'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const constants = require('../../generators/app/constants');

describe('Generate db files', () => {
  it('creates file if user chooses yes', () => {
    return helpers
      .run(constants.APP_PATH)
      .withPrompts({
        db: true,
        dbChoice: 'Mysql',
      })
      .then(() => {
        assert.file(['db/db.js']);
      });
  });

  it('should not create file if user chooses no', () => {
    return helpers
      .run(constants.APP_PATH)
      .withPrompts({
        db: false,
      })
      .then(() => {
        assert.noFile(['db/db.js']);
      });
  });
});
