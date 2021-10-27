const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title? (required)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log("\nPlease enter a project title");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Enter project description (required)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('\nPlease enter a description');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions (required)',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('\nPlease enter installation instructions');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions (required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('\nPlease enter usage instructions');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'Select a license (required)',
    choices: ['None', 'GPL', 'MIT'],
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter usage contributing instructions (leave blank for default for Contributor Covenant Code of Conduct',
    default: ''
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter tests (required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('\nPlease enter tests');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter email (required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('\nPlease enter an email address');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'Enter github username (required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('\nPlease enter a github user');
            return false;
        }
    }
}];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data);
 }

function init() { 
    inquirer.prompt(questions).then((answers) => {
        if (!answers.contributing) {
            answers.contributing = fs.readFileSync("./utils/coc.md", 'utf-8');
        }
        let md = generateMarkdown(answers);
        writeToFile('readme.md',md);
    });
}

init();
