const Employee = requires("./Employee.js");

class Intern extends Employee {
  constructor(school) {
    super(empName, empPosition, id, email);
    this.school = school;
  }
}

module.export = Intern;
