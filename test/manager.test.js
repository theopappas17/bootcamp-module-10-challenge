const Employee = require("../Classes/Employee");
const Manager = require("../Classes/Manager");

it("Manager is an Object", function () {
  const myManager = new Manager("Test", 12, "test@gmail", "Office 99");
  expect(myManager.name).toBe("Test");
  expect(myManager.empPosition).toBe("Tester");
  expect(myManager.empNum).toBe(12);
  expect(myManager.email).toBe("test@gmail.com");
  expect(myManager.officeNum).toBe("Office 99");
});
