const Employee = requires("./Employee.js");

class Intern extends Employee {
  constructor(school) {
    super(empName, empPosition, empNum, email);
    this.school = school;
  }
}

module.export = Intern;
