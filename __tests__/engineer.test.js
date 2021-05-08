const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");



const emp = new Engineer("John Doe", "100","johndoe@email.com","Git Hub");
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
    expect(emp.getRole()).toBe("Engineer");
});
test("employee Git Hub to be retrievable",()=>{
    expect(emp.getGitHub()).toBe("Git Hub");
});