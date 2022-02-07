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
  return `# ${data.title},
  ## Description
  ${data.description}
  
  
  ## Installation 
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License 
  
  
  
  ## Contributing
  ${data.contributing}
  
  
  ## Tests
  ${data.tests}
  
  
  
  ## Questions
  Any additional Questions feel free to email me at: ${data.email}
  
  
  © 2021 Tyler B Gandy. Confidential and Proprietary. All Rights Reserved.
  Other Projects and repositories can be viewed [here](www.github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
