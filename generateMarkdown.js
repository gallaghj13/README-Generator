// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Apache 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// GNU [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

function renderLicenseBadge(license){
    if (license === []) {
        return '';
    }
    if (license === 'MIT') {
        return "## License: " + "<br />" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (license === 'Apache-2.0') {
        return "## License: " + "<br />" + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    if (license === 'MPL-2.0') {
        return "## License: " + "<br />" + "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    if (license === 'GPL-3.0') {
        return "## License: " + "<br />" + "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
    // license = license.map(license => {
        if(license !== 'None') {
            return "* https://opensource.org/licenses/" + license
        }
    // })
    return license.join(" \n");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License 
This Project is licensed under the ${license} license.`;
    }
}

// {title, description, installation, usage, contributing, tests, github, email}
// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contributing, tests, github, email, license}) {
return `# ${title}

## Description

${description}

${renderLicenseBadge(license)}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

${renderLicenseSection(license)}

${renderLicenseLink(license)}

## Tests

${tests}

## Questions

Follow link for github: [Github Profile] (https://github.com/${github}) <br />
For any additional questions you can reach me at: ${email}

`;
}

module.exports = generateMarkdown;

