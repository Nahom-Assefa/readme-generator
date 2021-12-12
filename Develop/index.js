// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const {generateMarkdown, writeFile} = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  "What is the project title",
  "What is your project description",
  "What is your email",
  "Would you like to include a screenshot",
  "Please provide the relative path for screenshot using (![](<Relative Path>))",
  "Would you like other developers to contribute to this project",
  "Provide guidelines for how to contribute",
  "Please choose a license from the available options",
  "Did you have any features for this project?",
  "Please list collaborators with a link to their github",
  "Are there any installation specifications to highlight",
  "Describe the installation process",
  "What is the name to your github repository?",
  "What is the link to your github repository?",
  "Does your project contain a lot of features?",
  "Please list your features here"
];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: questions[1],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: questions[2],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "screenshotConfirm",
      message: questions[3],
      default: false,
    },
    {
      type: "input",
      name: "screenshot",
      message: questions[4],
      when: ({ screenshotConfirm }) => {
        if (screenshotConfirm) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmOtherDevelopers",
      message: questions[5],
      default: false,
    },
    {
      type: "input",
      name: "contribution",
      message: questions[6],
      when: ({ confirmOtherDevelopers }) => {
        if (confirmOtherDevelopers) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "rawlist",
      name: "license",
      message: questions[7],
      choices: ["mit", "apache-2.0", "mpl-2.0"],
      default: [0],
    },
    {
      type: "confirm",
      name: "creditsConfirm",
      message: questions[8],
      default: false,
    },
    {
      type: "input",
      name: "credits",
      message: questions[9],
      when: ({ creditsConfirm }) => {
        if (creditsConfirm) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "installationConfirm",
      message: questions[10],
      default: false,
    },
    {
      type: "input",
      name: "install",
      message: questions[11],
      when: ({ installationConfirm }) => {
        if (installationConfirm) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
        type: "input",
        name: "github",
        message: questions[12],
    },
    {
        type: "input",
        name: "link",
        message: questions[13],
    },
    {
      type: "confirm",
      name: "featureConfirm",
      message: questions[14],
      default: false,
    },
    {
      type: "input",
      name: "feature",
      message: questions[15],
      when: ({ featureConfirm }) => {
        if (featureConfirm) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
}

// Function call to initialize app
init()
  .then(questionData => {
    return generateMarkdown(questionData);
  })
  .then(fileResponse => {
    return writeFile(fileResponse)
  })
  .catch((err) => {
    console.log(err);
  });




//https://choosealicense.com/licenses/mit/
//https://choosealicense.com/licenses/apache-2.0/
//https://choosealicense.com/licenses/mpl-2.0/
