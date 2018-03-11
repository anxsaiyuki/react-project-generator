//=======View Source Files=======

module.exports = function() {
  //html
  this.fs.copy(
    this.templatePath('./view/_index.html'),
    this.destinationPath('./src/index.html')
  );

  //js
  this.fs.copyTpl(
    this.templatePath('./view/_index.js'),
    this.destinationPath('./src/index.js'),
    {
      reactRouter: this.props.reactRouter
    }
  );

  //React Router Included
  if (this.props.reactRouter) {
    this.fs.copy(
      this.templatePath('./view/router/_app.js'),
      this.destinationPath('./src/app.js'),
      {
        reactRouter: this.props.reactRouter
      }
    );
  }
}
