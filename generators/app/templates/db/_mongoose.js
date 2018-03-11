const mongoose = require('mongoose');
const URI = 'mongodb://localhost/test';
var db = mongoose.connection;

//===== DBSchema =======
var Schema = mongoose.Schema;




//======================

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
