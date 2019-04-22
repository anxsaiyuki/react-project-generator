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
    this.templatePath('./view/img/_img.jpg'),
    this.destinationPath('./src/img/img.jpg')
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

  //Redux Included
  if (this.props.redux) {
    // Store
    this.fs.copy(
      this.templatePath('./view/store/_store.js'),
      this.destinationPath('./src/store/store.js'),
    );

    // Action
    this.fs.copy(
      this.templatePath('./view/action/_listAction.js'),
      this.destinationPath('./src/action/listAction.js'),
    );

    // Reducer

    this.fs.copy(
      this.templatePath('./view/reducer/_reducer.js'),
      this.destinationPath('./src/reducer/reducer.js'),
    );

    this.fs.copy(
      this.templatePath('./view/reducer/_list.js'),
      this.destinationPath('./src/reducer/list.js'),
    );
  }
}
