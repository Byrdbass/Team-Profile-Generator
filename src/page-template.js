//create & call functions for each role's card
const Manager = require("../lib/Manager");


// const generateTeam = teamMembers => {
//   const makeManager = manager => {
//     return `html card`
//   }
// }
// return join all the HTML functions

//if statements for each role
//managerList = teamMembers.Manager
const generateHTML = (teamMembers, manager) => {
  for (i = 0; i < teamMembers.length; i++) {
    console.log()
 
    console.log('the current position is ' + [i]);
    managerName = teamMembers[0].name
    managerId = teamMembers[0].id
    managerEmail = teamMembers[0].email 
    managerOfficeNum = teamMembers[0].officeNum
    //     console.log('managers: ' + managerArray, 'engineers: ' + engineerArray, internArray)
    //       if (managerArray.indexOf === -1) {
    //         console.log("there are no managers in this array")
    //       } else
  }

  const generateManagerHTML = (managerName, managerId, managerEmail, managerOfficeNum) => {
    // const makeManager = manager => {
      return `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">${managerName}</div>
      <div class="card-body">
        <h5 class="card-title">ID #${managerId}</h5>
        <p class="card-text">Email: ${managerEmail}</p>
        <p class="card-text">Office Number: ${managerOfficeNum}</p>
      </div>`
    // }
  }

teamMembers.filter(Manager => Manager.getRole() === "Manager")
.map(manager => generateManagerHTML(manager))
.join

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hello World</h1>
        <h2> ${manager}
        ${generateManagerHTML(manager)} </h2>
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = generateHTML;