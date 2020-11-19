const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);



// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ## ${data.description}
    ## ${data.tableofcontents}
    ## ${data.installation}
    ## ${data.usage}
    ## ${data.license}
    ### ${data.contributing}
    ### ${data.tests}
    ### ${data.questionss}
    `;
  }
  
  module.exports = generateMarkdown;

  // array of questions for user
const questions = [
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
        type: 'choices',
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
        
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();