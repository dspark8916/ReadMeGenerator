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
            name: 'e-mail'
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
${data.questionss}
    `;
    return(readmeGen);
}
  
questions();