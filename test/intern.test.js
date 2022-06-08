const Employee = require("../Classes/Employee");
const Intern = require("../Classes/Intern");

it("Intern is an Object", function () {
  const myIntern = new Intern("Test", 12, "test@gmail", "University of Test");
  expect(myIntern.name).toBe("Test");
  expect(myIntern.empPosition).toBe("Tester");
  expect(myIntern.empNum).toBe(12);
  expect(myIntern.email).toBe("test@gmail.com");
  expect(myIntern.school).toBe("University of Test");
});
