const _ = require('lodash');

const merge = function(oldProps, newProps) {
  return _.merge(oldProps, newProps)
}

module.exports = {
  merge
}
