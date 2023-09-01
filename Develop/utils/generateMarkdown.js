// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `![License: MIT][![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license == 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license == 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license == 'GPL') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  else if (license == 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if (license == 'unlicensed') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `This application is licensed by MIT`

  } else if (license == 'BSD') {
    return `This application is licensed by BSD`

  } else if (license == 'GNU') {
    return `This application is licensed by GNU`

  } else if (license == 'GPL') {
    return `This application is licensed by GPL`

  } else if (license == 'ISC') {
    return `This application is licensed by BSD`

  } else if (license == 'unlicensed') {
    return `This application is unlicensed`

  } 
  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![licenseShield](https://img.shields.io/badge/license-MIT-yellow)

# Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${data.tableofcontents}


## Installation
### The following dependencies required to run the application:


${data.installation}
## Usage
![Preview](c:\Users\Kevin.DESKTOP-63MKTIS\OneDrive\Pictures\Screenshots\TempReadme.png)
${data.usage}
## License
Select this project's licensed organization: ![MIT](https://img.shields.io/badge/${renderLicenseLink(data.license)}-MIT-yellow)

## Contributing:
${data.contributing}
## Tests
[! Watch Video Here](https://drive.google.com/file/d/1780p8qiSDCBrg9hEsT95wiEmAfbckm6I/view)

${data.test}
## Questions
For additional questions, reach out to me at the following below
* GitHub: (https://github.com/${data.creator}/)
* Email: ${data.email} 
`;
}

module.exports = generateMarkdown;
