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
  
  
  ## Usage
  
  
  ## License 
  
  
  
  ## Contributing
  
  
  ## Tests
  
  
  
  ## Questions
  
  
  ## Up Next
  
  For a closer preview of what we explore in each unit of the boot camp, dive into each unit’s overview to learn the following:
  
  * What you will learn in the unit and why it’s important
  
  * How topics in the unit relate to what came earlier in the boot camp
  
  * Activities you’ll complete and what skills they focus on
  
  * Common interview questions related to that week’s material
  
  * Helpful resources if you want to get ahead or gain more experience after the unit
  
  © 2021 Tyler B Gandy. Confidential and Proprietary. All Rights Reserved.
  `;
}

module.exports = generateMarkdown;
