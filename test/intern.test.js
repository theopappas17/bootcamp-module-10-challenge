const Employee = require("../Classes/Employee");
const Intern = require("../Classes/Intern");

it("Intern is an Object", function () {
  const myIntern = new Employee("Test", 12, "test@gmail", "University of Test");
  expect(myIntern.name).toBe("Test");
  expect(myIntern.id).toBe(12);
  expect(myIntern.email).toBe("test@gmail.com");
  expect(myIntern.school).toBe("University of Test");
});
