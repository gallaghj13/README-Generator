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
        type: 'input',
        name: 'contents',
        message: '',
      },
      {
        type: 'input',
        name: 'installation',
        message: '',
      },
      {
        type: 'input',
        name: 'usage',
        message: '',
      },
      {
        type: 'input',
        name: 'license',
        message: '',
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
        name: 'questions',
        message: '',
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
