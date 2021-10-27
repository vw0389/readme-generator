// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return "\n* [License](#license)";
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
    
${renderLicenseBadge(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)${renderLicenseLink(data.license)}
* [Contribution](#contribution)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Tests

${data.tests}
${renderLicenseSection(data.license)}
## Contribution

${data.contributing}

## Questions

Github Username: https://github.com/${data.github}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
