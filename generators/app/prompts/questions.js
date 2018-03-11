const questions = function() {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    },
    {
      type: 'list',
      name: 'createFolder',
      message: 'Do you want to create a folder with the name',
      choices: [
        {
          name: 'Y',
          value: true,
        },
        {
          name: 'N',
          value: false,
        }
      ]
    },
    {
      type: 'list',
      name: 'db',
      message: 'Do you want db',
      choices: [
        {
          name: 'Y',
          value: true,
        },
        {
          name: 'N',
          value: false,
        }
      ]
    },
    {
      type: 'list',
      name: 'dbChoice',
      message: 'Do you want db',
      choices: ['Mysql', 'Mongoose'],
      when: (answers) => {
        return answers.db
      }
    },
    {
      type: 'list',
      name: 'reactRouter',
      message: 'Do you want React Router',
      choices: [
        {
          name: 'Y',
          value: true,
        },
        {
          name: 'N',
          value: false,
        }
      ]
    }
  ];
}



module.exports = questions;
