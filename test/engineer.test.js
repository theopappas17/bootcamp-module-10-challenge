const Employee = require("../Classes/Employee");
const Engineer = require("../Classes/Engineer");

it("Engineer is an Object", function () {
  const myEngineer = new Engineer(
    "Test",
    12,
    "test@gmail",
    "test@githubUsername"
  );
  expect(myEngineer.name).toBe("Test");
  expect(myEngineer.empPosition).toBe("Tester");
  expect(myEngineer.empNum).toBe(12);
  expect(myEngineer.email).toBe("test@gmail.com");
  expect(myEngineer.githubUersname).toBe("test@githubUsername");
});
