const initial = function() {
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
      message: 'Choose a DB',
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
    },
    {
      type: 'list',
      name: 'redux',
      message: 'Do you want Redux',
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
      name: 'serverRouter',
      message: 'Do you want Server Router',
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
  ];
}

const serverRouter = function() {
  return [
    {
      type: 'input',
      name: 'routerName',
      message: 'Router Name (Press Enter to Exit)',
    }
  ]
}



module.exports = {
  initial,
  serverRouter,
};
