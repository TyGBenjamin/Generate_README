const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please briefly describe the project?',
    },
    {
      type: 'input',
      name: 'descriptionA',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How should this applciation be installed?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is the primary use of application?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who has Contributed to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      choices: ['Apache','GNU','MIT','Mozilla','ISC']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
    },
  ]);
};



// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers), console.log(answers)))
    .then(() => console.log('Successful'),
    )
    .catch((err) => console.error(err));

};

init();
