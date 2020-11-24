const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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
            name: 'email'
        }
    ])
    .then(function (data) {
        console.log(data);
        let README = generateMarkdown(data);
        writeFileAsync("README.md", README).then(
            err => console.log("Successfully wrote to file README.")
        );
    })
}

function generateMarkdown(data) {
    
    let readmeGen = 

`# ${data.title}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}

### Contributing
${data.contributing}

### Tests
${data.tests}

### Questions 
If you have additional questions and would like to reach out to me please feel free to do so at the following email: ${data.email}. Thank you.

Check Out My Github Page Below:
[Github](https://github.com/${data.username})
    `;
    return(readmeGen);
}
  
questions();

// title: 'Professional ReadMe Generator',
// description: 'The purpose of this project is to create a command line application that accepts user input to then generate a professional ReadMe file.',
// installation: "For this project you run to run 'npm i' to install a package.json file and 'npm i inquirer' to install the inquirer package.",
// usage: "Run 'node .\\index.js' to receieve prompts to enter data that will be filled in to the ReadMe.",
// contributing: 'Anyone that would like to contribute is able to do so.',
// test: "To run a test for this application you can just run the 'npm run test' command in your terminal.",
// license: 'MIT',
// username: 'dspark8916',
// 'e-mail': 'dmicevski89@yahoo.com'