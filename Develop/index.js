// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('util');

// Internal modules
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to my README generator!")

// TODO: Create an array of questions for user input
const questions = [ 
// Name of the project    
{
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
    validate: your_Input => {
        if (your_Input) {
            return true;
        } else {
            console.log('A valid project title is required.');
            return false; 
        }
    }
},
// Description of the project
{
    type: 'input',
    name: 'description',
    message: "Write a description of your project.",
    validate: your_description => {
        if (your_description) {
            return true;
        } else {
        console.log('A valid project description is required.');
        return false;
        }
    }
},
// Installation of the project
{
    type: 'input',
    name: 'installation',
    message: 'How did you install your project',
    validate: your_installation => {
        if (your_installation) {
            return true;
        } else {
        console.log('Your steps for installation is required.');
        return false;
        }
    }
},
// Usage of the project
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this project',
    validate: your_usage => {
        if (your_usage) {
            return true;
        } else {
        console.log('Enter the information on how to use this project.');
        return false;
        }
    }
},
// License of the project
{
    type: 'input',
    name: 'license',
    message: 'Choose a license that will best suit your project.',
    choices: ['MIT', 'Mozilla', 'GNU', 'None of these'],
    validate: your_licence => {
        if (your_licence) {
            return true;
        } else {
        console.log('Select a license for the project');
        return false;
        }
    }
},
// Contributions of the project
{
    type: 'input',
    name: 'contribution',
    message: 'How can users contribute to this project?',
    validate: your_contribution => {
        if (your_contribution) {
            return true;
        } else {
        console.log('Provide information on how to contribute to the project.');
        return false;
        }
    }
},
// Testing
{
    type: 'input',
    name: 'test',
    message: 'How does the user test this project?',
    validate: your_test => {
        if (your_test) {
            return true;
        } else {
        console.log('Explain how to test this project.');
        return false;
        }
    }
},
//Github
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (required)',
    validate: github_input => {
        if (github_input) {
            return true;
        } else {
        console.log('Please enter your GitHub username.');
        return false;
        }
    }
},
// Email
{
    type: 'input',
    name: 'email',
    message: 'Enter your email for those who may have any questions about the generator?',
    validate: email_input => {
        if (email_input) {
            return true;
        } else {
        console.log('Please enter your email');
        return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Success!  Your README.md file has been created");

    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
    console.log(userInput)
    writeToFile("README.md", generateMarkdown(userInput));

    });
};

// Function call to initialize app
init();
