const { test, expect } = require("@jest/globals");
const Manager = require("../lib/manager");



const emp = new Manager("John Doe", "100","johndoe@email.com","Office Number 200");
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
    expect(emp.getRole()).toBe("Manager");
});
test("employee Office Number to be retrievable",()=>{
    expect(emp.getOfficeNumber()).toBe("Office Number 200");
});