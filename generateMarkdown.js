// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description {#description}

  ${data.description}

  ## Table of Contents
  1. [Description] (#description)
  2. [Installation] (#installation)
  3. [Usage] (#usage)
  4. [Contributing] (#contributing)
  5. [Tests] (#tests)
  6. [Questions] (#questions)

  ## Installation {#installation}

  ${data.installation}

  ## Usage {#usage}

  ${data.usage}

  ## Contributing {#contributing}

  ${data.contributing}

  ## Tests {#tests}

  ${data.tests}

  ## Questions {#questions}

  Follow link for github: [Github Profile] (https://github.com/${data.github})
  For any additional questions you can reach me at:
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
