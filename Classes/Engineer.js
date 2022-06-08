const Employee = requires("./Employee.js");

class Engineer extends Employee {
  constructor(githubUsername) {
    super(empName, empPosition, id, email);
    this.githubUsername = githubUsername;
  }
}

module.export = Engineer;
