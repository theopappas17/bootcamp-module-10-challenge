const Employee = require("../Classes/Employee");
const Manager = require("../Classes/Manager");

it("Manager is an Object", function () {
  const myEngineer = new Employee("Test", 12, "test@gmail", "Office 99");
  expect(myEngineer.name).toBe("Test");
  expect(myEngineer.id).toBe(12);
  expect(myEngineer.email).toBe("test@gmail.com");
  expect(myEngineer.officeNum).toBe("Office 99");
});
