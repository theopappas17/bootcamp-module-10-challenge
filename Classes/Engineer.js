const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(githubUsername) {
    super(empName, empPosition, empNum, email);
    this.githubUsername = githubUsername;
  }
}

module.export = Engineer;
