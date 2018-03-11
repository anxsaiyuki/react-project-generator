'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const prompts = require('./prompts/questions');
const writeconfig = require('./generate/writeconfig');
const generalUtil = require('./generalUtil');
const mkdirp = require('mkdirp');
const path = require('path');

//const generalUtility = require('./generalUtility');
const constants = require('./constants');

const MESSAGE = `Welcome to the peachy ${chalk.red('generator-anxsaiyuki')} generator!`;

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(MESSAGE)
    );

    return this.prompt(prompts.initial.call(this)).then(props => {
      this.props = props;
    });
  }

  serverRouterPrompt() {
    if (this.props.serverRouter) {
      return this.prompt(prompts.serverRouter.call(this)).then(props => {
        if (props.routerName !== '') {
          if (!this.props.routerList) {
            this.props.routerList = [props.routerName]
          } else {
            this.props.routerList.push(props.routerName)
          }
          this.props = generalUtil.merge(this.props, props);
          return this.serverRouterPrompt();
        }
      });
    }
  }

  default() {
    if (this.props.createFolder) {
      if (path.basename(this.destinationPath()) !== this.props.name) {
        this.log(`Folder created for ${this.props.name}`);
        mkdirp(this.props.name);
        this.destinationRoot(this.destinationPath(this.props.name));
      }
    }
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
