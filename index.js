// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown")
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
        name: 'installation',
        message: 'Write a description of what the user will need to install in order to use your application:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use the app:',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Would you like to add any of the following licenses?',
        choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU General Public License']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for other developers to contribute:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Give test instructions:',
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
function writeToFile(data) {
    const readmePageContent = generateMarkdown(data);
    fs.writeFile('README.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
        .then( (data) => {
            console.log(data);
            writeToFile(data);
        })
}

// Function call to initialize app
init();
