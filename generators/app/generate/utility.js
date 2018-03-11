//=======CONFIG=======

module.exports = function() {
  //Package Json
  this.fs.copyTpl(
    this.templatePath('./config/_package.json'),
    this.destinationPath('package.json'),
    {
      name: this.props.name,
      reactRouter: this.props.reactRouter,
    }
  );

  //Webpack
  this.fs.copyTpl(
    this.templatePath('./config/_webpack.config.js'),
    this.destinationPath('webpack.config.js'),
    {
      reactRouter: this.props.reactRouter,
    }
  );

  //TODO need to determine if user wants react router or not
  //Page JSON
  this.fs.copy(
    this.templatePath('./config/_page.json'),
    this.destinationPath('page.json')
  );

  //Gulpfile
  this.fs.copy(
    this.templatePath('./config/_gulpfile.js'),
    this.destinationPath('gulpfile.js')
  );

  //Gitignore
  this.fs.copy(
    this.templatePath('./config/_gitignore.js'),
    this.destinationPath('.gitignore')
  );

  //Flow Config
  this.fs.copy(
    this.templatePath('./config/_flowconfig.js'),
    this.destinationPath('.flowconfig')
  );
}
