'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const prompts = require('./prompts/messages');
const writeconfig = require('./generate/writeconfig');
//const generalUtility = require('./generalUtility');
const constants = require('./constants');

const MESSAGE = `Welcome to the peachy ${chalk.red('generator-anxsaiyuki')} generator!`;

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(MESSAGE)
    );
    var props = [];
    return this.prompt(prompts.call(this)).then(props => {
      this.props = props;
      // this.prompt(prompts.db.call(this)).then(dbProps => {
      //   if (dbprops === 'Y') {
      //     this.prompt(prompts.dbChoice.call(this)).then(dbChoiceProps => {
      //       props.push(dbChoiceProps)
      //       console.log("test")
      //       console.log(generalUtility.flattenObj(props));
      //       this.props = generalUtility.flattenObj(props)
      //     });
      //   }
      // });
    });
  }
  //
  writing() {
    writeconfig.call(this)
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
