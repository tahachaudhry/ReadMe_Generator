// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileSync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'descitption',
        message: 'What is the description of your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would you like others to contribute to this project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want?',
        choices: ["MIT", "mpl-2.0", "osl-3.0" ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email and what is the best way to reach you?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFileSync(fileName, data)
    console.log("file written sucessfully")
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("OutputReadMe.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
