const fs = require("fs");

function screen(screenshot) {
  if (!screenshot) {
    return "";
  }
  return `### Usage
  ${screenshot}`;
}

function credits(credit) {
  if (!credit) {
    return "";
  }
  return `### Credits
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

function contributing(contribution) {
  if (!contribution) {
    return "";
  } else {
    return `### Contributing
  ${contribution}`;
  }
}

function features(feature) {
  if (!feature) {
    return "";
  } else {
    return `### Features
  ${feature}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, arr) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Description
  ${data.description}

  ## Table Of Contents
1) [${arr[0]}](#Installation)
2) [${arr[1]}](#Usage)
3) [${arr[2]}](#Contributing)
4) [${arr[3]}](#Credits)
5) [${arr[4]}](#Features)
6) [${arr[5]}](#Additional Information)
  
  ${installations(data.install)}

  ${screen(data.screenshot)}

  ${contributing(data.contribution)}

  ${credits(data.credits)}

  ${features(data.feature)}


  ### Additional Information 

  *This project is licensed under the ${
    data.license
  } license. https://choosealicense.com/licenses/${data.license}/


  **My Github repository ${data.github} can be found here: ${data.link}**

  **You can contact me at: ${data.email}**  
  
`;
}

//Output to create file function
const writeFile = (questionContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./utils/README.md", questionContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

module.exports = { generateMarkdown, writeFile };
