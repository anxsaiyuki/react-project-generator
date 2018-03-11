'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the peachy ${chalk.red('generator-anxsaiyuki')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
  //
  writing() {
    //=======CONFIG=======
    //Package Json
    this.fs.copyTpl(
      this.templatePath('./config/_package.json'),
      this.destinationPath('package.json'),
      { name: this.props.name }
    );

    //Webpack
    this.fs.copy(
      this.templatePath('./config/_webpack.config.js'),
      this.destinationPath('webpack.config.js')
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

    //=======View Source Files=======
    //html
    this.fs.copy(
      this.templatePath('./view/_index.html'),
      this.destinationPath('./src/index.js')
    );

    //js
    this.fs.copy(
      this.templatePath('./view/_index.js'),
      this.destinationPath('./src/index.js')
    );
  }
  //
  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false,
    });
  }
};
