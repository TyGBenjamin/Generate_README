// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    // let licenseUrl="";
if( license != 'none')
{ return `![this was a badge](https://img.shields.io/badge/License-${license}-blue.svg)`}

return '';
// if (license === 'apache'){
//     licenseUrl = ![](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0"
// }
// if (license === 'GNU'){
//     licenseUrl = "https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0"
// }
// if (license === 'MIT'){
//     licenseUrl = "https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT"
// }
// if (license === 'Mozilla'){
//     licenseUrl = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0"
// }
// if (license === 'ISC'){
//     licenseUrl = "https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC"
// }
// else { licenseUrl =''}
// return licenseUrl
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !='none'){
        return `  [License](#license)`
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !='none'){
       return  `## License 
        This project is Licensed under`
        
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

// renderLicenseBadge(data)



  return `# ${data.title},

  ## Table of Contents
  * [Description](#description)
  * ${renderLicenseLink(data.license)} 
  * [installation](#installation)


  ## Description
  ${data.description}
  
  
  ## Installation 
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ${data.problem}
  
  ${renderLicenseSection(data.license)}
 

  ${renderLicenseBadge(data.license)}

  
  
  
  ## Contributing
  ${data.contributing}
  
  
  ## Tests
  ${data.tests}
  
  
  
  ## Questions
  A video for previewing the usage of this application can be found in the following link 
  [Video-Walkthrough](https://www.youtube.com/watch?v=OOfBL2i1Gc0)
  Any additional Questions feel free to email me at: ${data.email}
  
  
  © 2021 Tyler B Gandy. Confidential and Proprietary. All Rights Reserved.
  Other Projects and repositories can be viewed [here](www.github.com/${data.github})
  `;


}

module.exports = generateMarkdown;
