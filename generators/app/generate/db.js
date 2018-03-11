const constants = require('../constants');

//=======Database=======
module.exports = function() {
  //Database

  switch (this.props.dbChoice) {
    case constants.MYSQL:
      this.fs.copyTpl(
        this.templatePath('./db/_mysql.js'),
        this.destinationPath('./db/db.js')
      );
      break;
    case constants.MONGOOSE:
      this.fs.copyTpl(
        this.templatePath('./db/_mongoose.js'),
        this.destinationPath('./db/db.js')
      );
      break;
    default:
      break;
  }

}
