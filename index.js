const inquirer = require("inquirer");
const fs = require("fs");
const createHtml =require("./lib/HTML.generator");


const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");


const employees =[];

const menuQ ={
    message:"What would you like to do?",
    name:"action",
    type:"list",
    choices:["Add Manager","Add Intern","Add Engineer","Exit"]
};
const employeeQ = [
    {
        message:"Name?",
        name:"name"
    },
    {
        message:"Id?",
        name:"id"
    },
    {message:"Email?",
name:"email"
}

];
const managerQ = [...employeeQ,{
    message:"Office Number?",
    name:"officeNumber"
}];
const engineerQ = [...employeeQ,{
    message:"Git Hub?",
    name:"github"
}];
const internQ = [...employeeQ,{
    message:"School?",
    name:"school"
}];

function start(){
    console.log ("Welcome to my App");
    menu();

}
function menu(){
    inquirer.prompt(menuQ).then(action);
}
function action(res){
switch(res.action){
    case "Add Manager": addManager(); break;
    case "Add Engineer": addEngineer();break;
        case "Add Intern": addIntern();break;
            case "Exit": createFile();break;

}
}
function addManager(){
    inquirer.prompt(managerQ).then(res=>{
        employees.push(new Manager(res.name,res.id,res.email,res.officeNumber));
        console.log("Manager Added");
        menu();
    });
}

function addEngineer(){
    inquirer.prompt(engineerQ).then(res=>{
        employees.push(new Engineer(res.name,res.id,res.email,res.gitHub));
        console.log("Engineer Added");
        menu();
    });
}
function addIntern(){
    inquirer.prompt(internQ).then(res=>{
        employees.push(new Intern(res.name,res.id,res.email,res.school));
        console.log("Intern Added");
        menu();
    });
}
function createFile(){
    const html = createHtml(employees);
    const path = "./dist/team.html";
    fs.writeFileSync(path,html);
    finish();
}
function finish(){
    console.log("Thank you for using my App");
    process.exit(1);
}
start();