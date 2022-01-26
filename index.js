// need classes manager, engineer, intern
//getName function, getRole function
//requires subclasses, path, html(generator)

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee')
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const dataEngineer = require('./lib/Engineer');
const dataEmployee = require('./lib/Employee');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

//const render = require('./src/page-template.js')

const teamMembers = [];
const idArray = [];

inquirer
    .prompt(Manager)
    .then((dataManager) => {
        console.log(dataManager.name, dataManager.id, dataManager.email, dataManager.officeNum)
        if (dataManager.choice === 'Yes') {
            inquirer
            .prompt(Employee)
            .then((dataEmployee) => {
                console.log(dataEmployee)
            })
        }
        inquirer
        .then(if (dataManager.role === 'Engineer') {
            inquirer
            .prompt(Engineer)
            .then((dataEngineer)=> {
                console.log(dataEngineer)
            })
        }
    })