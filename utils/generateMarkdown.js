// determins which license and badge is choosen by user
function renderLicense(license){

  if(license.license === 'Mozzila Public License 2.0'){
    license.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
    license.licenseURL = 'https://opensource.org/licenses/MPL-2.0';
  };
  if(license.license === 'Appache 2.0 License'){
    license.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    license.licenseURL = 'https://opensource.org/licenses/Apache-2.0';
  };
  if(license.license === 'The MIT License'){
    license.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    license.licenseURL = 'https://opensource.org/licenses/MIT';
  };
  if(license.license === 'Boost Software License 1.0'){
    license.badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]';
    license.licenseURL = 'https://www.boost.org/LICENSE_1_0.txt';
  };
  if(license.license === 'The Unlicense'){
    license.badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
    license.licenseURL = 'http://unlicense.org/';
  };

 return license 
};


// function to generate markdown for README
const createMarkdown = (data) => 
 
  `
  
  # ${data.title}

  ## Description
  ${data.description}
  
  ## License Badge
  
  ${data.badge}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.collaborators}
  
  ## License
  
  ${data.license}
  
  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  Check out my Github for more information
  
  [${data.github}](https://www.github.com/${data.github})
  
  Or email me with any questions or issues.

  [${data.email}](${data.email})


  `


// export modules
module.exports = {

  createMarkdown,
  renderLicense

}
