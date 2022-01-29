const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
//create & call functions for each role's card
const generateManagerHTML = (manager) => {
    return `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.name} , Manager</div>
    <div class="card-body">
      <h5 class="card-title">ID #${manager.id}</h5>
      <p class="card-text">Email: ${manager.email}</p>
      <p class="card-text">Office Number: ${manager.officeNum}</p>
    </div>`
}

//put a link element in here for email of all three cards
//put a link element in here for gitHub to open in new tab
const generateEngineerHTML = (engineer) => {
  return `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">${engineer.name} , Engineer</div>
  <div class="card-body">
    <h5 class="card-title">ID #${engineer.id}</h5>
    <p class="card-text">Email: ${engineer.email}</p>
    <p class="card-text">Office Number: ${engineer.github}</p>
  </div>`
}

const generateInternHTML = (intern) => {
  return `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">${intern.name} , Intern</div>
  <div class="card-body">
    <h5 class="card-title">ID #${intern.id}</h5>
    <p class="card-text">Email: ${intern.email}</p>
    <p class="card-text">Office Number: ${intern.school}</p>
  </div>`
}


const generateHTML = (teamMembers) => {

  const getManagers = teamMembers.filter(Manager => Manager.getRole() === "Manager")
  .map(manager => generateManagerHTML(manager))

  const getEngineers = teamMembers.filter(Engineer => Engineer.getRole() === "Engineer")
  .map(engineer => generateEngineerHTML(engineer))

  const getInterns = teamMembers.filter(Intern => Intern.getRole() === "Intern")
  .map(intern => generateInternHTML(intern))


console.log(getEngineers)

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
        <h1 class="display-4">Team Profile!</h1>
        <div class='my-2 mx-3'>${getManagers} </div>
        <div class='my-2 mx-3'>${getEngineers} </div>
        <div class='my-2 mx-3'>${getInterns} </div>
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = generateHTML;