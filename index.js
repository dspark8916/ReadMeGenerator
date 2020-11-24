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
            name: 'tests'
        },
        {
            type: 'checkbox',
            message: 'Please choose your license from the following options:',
            choices: [
                "MIT License",
                "Apache 2.0",
                "GPL",
                "Mozilla Public License 2.0"
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
![License](https://img.shields.io/badge/-${response.license}-brightgreen/)

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
This application is covered under the following license: ${data.license}.

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