//=======Server=======

module.exports = function() {

  //Server
  this.fs.copyTpl(
    this.templatePath('./server/_server.js'),
    this.destinationPath('./server/server.js'),
    {
      routerList: this.props.routerList,
      serverRouter: this.props.serverRouter,
      reactRouter: this.props.reactRouter,
    }
  );

  //Setup router
  if (this.props.serverRouter && this.props.routerList) {
    this.props.routerList.forEach((router) => {
      this.fs.copyTpl(
        this.templatePath('./server/_router.js'),
        this.destinationPath(`./server/router/${router}.js`),
        {
          router: router
        }
      )
    })
  }
}
