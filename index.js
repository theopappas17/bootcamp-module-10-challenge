const jest = require('jest');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      name: "Test",
      empPosition: "Tester",
      message: "Who is the author(s) of this project?",
    },