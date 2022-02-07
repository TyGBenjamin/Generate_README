const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown')

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your porject?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please briefly describe the project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How should this applciation  be installed?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is the primary use of application?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Contribuitng factors/guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Test instructions?',
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

// const generateREADME = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
