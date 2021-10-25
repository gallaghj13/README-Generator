// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project:',
      },
      {
        type: 'checkbox',
        name: 'contents',
        message: 'Which sections will be included in this README?',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Write a description of what the user will need to install in order to use your application:',
      },
      {
        type: 'input',
        name: 'usage',
        message: '',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Would you like to add any of the following licenses?',
        choices: ['MIT', ]
      },
      {
        type: 'input',
        name: 'contributing',
        message: '',
      },
      {
        type: 'input',
        name: 'tests',
        message: '',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is an email address that you would like to associate with this project?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
        .then((answers) => {
            const readmePageContent = writeToFile(answers);

            fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!'))
        })
}

// Function call to initialize app
init();
