const { test, expect } = require("@jest/globals");
const Intern = require("../lib/intern");



const emp = new Intern("John Doe", "100","johndoe@email.com","School");
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
    expect(emp.getRole()).toBe("Intern");
});
test("employee School to be retrievable",()=>{
    expect(emp.getSchool()).toBe("School");
});