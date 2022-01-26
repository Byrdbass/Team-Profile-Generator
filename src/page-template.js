const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee')


const generateHTML = (dataManager, dataEmployee, dataEngineer, dataIntern) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hello World</h1>
        <h2> ${dataManager} </h2>
        <h3> ${dataEmployee} </h3>
        <h4> ${dataEngineer} <h4>
        <h5> ${dataIntern} <h5>
        </div>
        </div>
    </body>
    </html>`
}

fs.writeFile('../index.html', generateHTML(Manager, Employee, Engineer, Intern), (err) =>
err? console.log(err) : console.log('response written to file') );