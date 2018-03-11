//=======Server=======

module.exports = function() {
  //Server
  this.fs.copyTpl(
    this.templatePath('./server/_server.js'),
    this.destinationPath('./server/server.js')
  );
}
