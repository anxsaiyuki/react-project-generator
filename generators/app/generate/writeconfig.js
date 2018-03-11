//Used to combine all the files to write
const utility = require('./utility');
const source = require('./source');
const server = require('./server');
const db = require('./db');

module.exports = function() {
  utility.call(this);
  source.call(this);
  server.call(this);
  db.call(this);
}
