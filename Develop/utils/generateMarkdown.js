// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
 function screen(screenshot) {
      if (!screenshot) {
      return "";
   }
  return `##screenshot
          ${screenshot}`
}

function credits(credit) {
  if (credit) {
  return "";
}
return `## Credits
These individual(s): ${credit} collaborated with me on this project`
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${data.tableOfContents}
  * [Description](#description)
  * [Installation](#install)
  * [Screenshot](#screenshot)
  * [Credits](#credits)
  * [License](#license)
  
  ### Description
   ${data.description}

  ### Installation
   ${data.install}

  ${screen(data.screenshot)}

  ${credits(data.credits)}

  *This project is licensed under the ${data.license} license.*
  **My Github repository ${data.github} can be found here: (${data.link})**
  **Contact me: (${data.email})**  
  
`;
}

const writeToFile = (questionContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./develop/dist/README.md", questionContent, (err) => {
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

module.exports = {generateMarkdown, writeToFile};



