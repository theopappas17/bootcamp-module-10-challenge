const Employee = requires("./Employee.js");

class Manager extends Employee {
  constructor(officeNum) {
    super(empName, empPosition, id, email);
    this.officeNum = officeNum;
  }
}

module.export = Manager;
