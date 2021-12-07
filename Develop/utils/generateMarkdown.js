const fs = require('fs');

function screen(screenshot) {
  if (!screenshot) {
    return "";
  }
  return `## Usage
          ${screenshot}`;
}

function credits(credit) {
  if (!credit) {
    return "";
  }
  return `## Credits
These individual(s): ${credit} collaborated with me on this project`;
}

function installations(installation) {
  if (!installation) {
    return "";
  } else {
    return `## Installation
            ${installation}`;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   ${data.description}

  ## Table Of Contents
  * [${data.tableOfContents[0]}](#installation)
  * [${data.tableOfContents[1]}](#usage)
  * [${data.tableOfContents[2]}](#credits)
  * [${data.tableOfContents[3]}](#license)
  * [${data.tableOfContents[4]}](#developers)
  
  ${installations(data.install)}

  ${screen(data.screenshot)}

  ${credits(data.credits)}


  ## Additional Information 
  *This project is licensed under the ${data.license} license.*
  **My Github repository ${data.github} can be found here: ${data.link}**
  **You can contact me at: ${data.email}**  
  
`;
}

//Output to create file function
const writeFile = questionContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./utils/README.md', questionContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!"
      });
    });
  });
};

module.exports = {generateMarkdown, writeFile};
