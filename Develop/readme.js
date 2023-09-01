//  Include packages needed for this application //
const fs = require('fs');
const  path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// .prompt([
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "tableofcontents",
        message: "If your README is long, add a table of contents to make it easy for users to find what they need.",
    },
    {
        type: "input",
        name: "installation",
        message: "The steps required to install your project.",

    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ['BSD', 'MIT', 'GNU', 'GPL', 'ISC', 'unlicensed', ]
    },
    {
        type: "input",
        name: "contributing",
        message: "List your contributions.",
        
    },
    {
        type: "input",
        name: "tests",
        message: "Provide required walkthrough of provided tests.",
    },
    {
        type: "input",
        name: "creator",
        message: "Provide GitHub username.",

    },
    {
        type: "input",
        name: "email",
        message: "Provide valid email address.",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    console.log("Enjoy your README file");    
});
}; 

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data)=> {
        writeToFile('README.md', generateMarkdown(data));
        console.log(data);        
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
