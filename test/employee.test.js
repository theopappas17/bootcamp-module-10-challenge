const Employee = require("../Classes/Employee")

it('Employee is an Object', function(){
    const myEmployee = new Employee("Test",12,"test@gmail")
    expect (myEmployee.name).toBe("Test")
})