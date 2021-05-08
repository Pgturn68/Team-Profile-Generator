const htmlTop = `
<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Team Profile Generator</title>
    <style>
    body{margin:0;background-color:cornsilk;font-family:sans-serif;}
    h1{padding:10px;text-align:center;color:white;background-color:darkslategrey;}
    main{text-align:center;}
div{display:inline-block;text-align:left;background-color:darkcyan;border-radius:10px;padding:5px;margin:15px;box-shadow:0 0 5px black;}
h2,h3{text-align:center;color:white;}
p{margin:2px;padding:3px 10px;background-color:white;}
    </style>
    </head>
    <body>
    <h1>Meet the Team</h1>
    <main>
`;
const htmlBottom= `
</main>
</body>
</html>
`;
function createCard(emp){
  let html =`
  <div>
  <h2>${emp.getName()}</h2>
  <h3>${emp.getRole()}</h3>
  <p>Id: ${emp.getId()}</p>
  <p>Email: ${emp.getEmail()}</p>
  ` ; 
switch(emp.getRole()){
    case "Manager": html+=`<p>Office Number: ${emp.getOfficeNumber()}</p>`; break;
    case "Engineer": html+=`<p>Git Hub: ${emp.getGitHub()}</p>`; break;
    case "Intern": html+=`<p>School: ${emp.getSchool()}</p>`; break;
}

  html+="</div>";
  return html;
}
function createTeam(employees){
    let html = htmlTop;
for(let employee of employees){
    html+= createCard(employee);
}

html+= htmlBottom;
return html;

}
module.exports=createTeam;