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
      name: 'dbChoice',
      message: 'Do you want db',
      choices: ['Mysql', 'Mongoose']
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
