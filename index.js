const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);



// // function to generate markdown for README
// function generateMarkdown(data) {
//     return `# ${data.title}
//     ## ${data.description}
//     ## ${data.tableofcontents}
//     ## ${data.installation}
//     ## ${data.usage}
//     ## ${data.license}
//     ### ${data.contributing}
//     ### ${data.tests}
//     ### ${data.questionss}
//     `;
//   }
  
//   module.exports = generateMarkdown;

  // array of questions for user
const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please provide a brief description of your project:',
            name: 'description'
        },
        {
            type: 'checkbox',
            message: 'Please select the sections you would like to include in your Table of Contents:',
            choices: [
                "Installaion",
                "Usage",
                "License",
                "Contributing",
                "Tests",
                "Questions"
            ],
            name: 'tableofcontents'
        },
        {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation'
        },
        {
            type: 'input',
            message: 'What is the usage information for your project?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What are the contributing guidelines for your project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'What are the test instructions for your project?',
            name: 'test'
        },
        {
            type: 'list',
            message: 'Please choose your license from the following options:',
            choices: [
                "MIT",
                "Apache",
                "BSD",
                "GPL"
            ],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your e-mail?',
            name: 'e-mail'
        }
    ])
    .then(function (response) {
        console.log(response);
    })
}

questions();
// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();