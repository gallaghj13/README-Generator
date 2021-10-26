// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// {title, description, installation, usage, contributing, tests, github, email}
// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contributing, tests, github, email}) {
  return `# ${title}

  ## Description

  ${description}

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

  ## Tests

  ${tests}

  ## Questions

  Follow link for github: [Github Profile] (https://github.com/${github})
  For any additional questions you can reach me at:
  Email: ${email}

`;
}

module.exports = generateMarkdown;
