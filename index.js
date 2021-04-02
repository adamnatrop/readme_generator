//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'What steps are required to install?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What steps are required to install?',
        name: 'license',
        choices: ['Mozzila Public License 2.0', 'Appache 2.0 License', 'The MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message: 'Who do you want to credit?',
        name: 'collaborators',
    },
    {
        type: 'input',
        message: 'What features do you want to note?',
        name: 'features',
    },
    {
        type: 'input',
        message: 'How will you contribute?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'How to test project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'what is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'what is your email?',
        name: 'email',
    },
];

//function to write README file
function writeToFile(fileName, data) {
  
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Your README file has been generated!'))
}

// initialize app
function init() {
    // prompt user for responses
    inquirer
        .prompt(
            questions
        ).then((response) =>{
        // run modules to generate readme markdown file contents
        const license = generateMarkdown.renderLicense(response)
        const readmeFile = generateMarkdown.createMarkdown(license)
       // funtion to create the file
        writeToFile('PROJECT_README.md', readmeFile)
          
    })
}

// Function call to initialize app
init();