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

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();