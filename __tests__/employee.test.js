const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");



const emp = new Employee("John Doe", "100","johndoe@email.com");


test("employee is an Object",()=>{
    expect(typeof emp).toBe("object");
});
test("employee name to be retrievable",()=>{
    expect(emp.getName()).toBe("John Doe");
});
test("employee id to be retrievable",()=>{
    expect(emp.getId()).toBe("100");
});
test("employee email to be retrievable",()=>{
    expect(emp.getEmail()).toBe("johndoe@email.com");
});
test("employee role to be retrievable",()=>{
    expect(emp.getRole()).toBe("Employee");
});