//=======View Source Files=======

module.exports = function() {
  //html
  this.fs.copyTpl(
    this.templatePath('./view/_index.html'),
    this.destinationPath('./src/index.html'),
    {
      reactRouter: this.props.reactRouter
    }
  );

  //js
  this.fs.copyTpl(
    this.templatePath('./view/_index.js'),
    this.destinationPath('./src/index.js'),
    {
      reactRouter: this.props.reactRouter
    }
  );

  //css
  this.fs.copy(
    this.templatePath('./view/css/_index.css'),
    this.destinationPath('./src/css/index.css')
  )

  //image
  this.fs.copy(
    this.templatePath('.gitkeep'),
    this.destinationPath('./src/img/.gitkeep')
  )

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
