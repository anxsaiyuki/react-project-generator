const _ = require('lodash');

const merge = function(oldProps, newProps) {
  //var combined = Object.assign({}. oldProps);
  return _.merge(oldProps, newProps)
  //
  // return flatten
}

module.exports = {
  merge
}
