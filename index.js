const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Classes/Employee.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "empName",
      message: "What is your name?",
    },
    {
      type: "list",
      name: "empPosition",
      message: "What is you position in the company",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "empNum",
      message: "What is your employee ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your company email?",
    },
  ])
  .then((answers) => {
    generateClasses(answers);
  });
