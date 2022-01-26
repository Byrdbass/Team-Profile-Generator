//getName function, getRole function
//requires subclasses, path, html(generator)

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee')
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

//const render = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

//gets name for Employees that are interns and Engineers
const getName = (dataEmployee) => {
    inquirer
        .prompt(Employee)
        .then((dataEmployee) => {
            console.log(dataEmployee)
        })
    return dataEmployee
}
//do a get team to run the get role function

//DO I NEED SUBCLASSES TO GET THIS TO RUN
const getRole = (dataManager) => {
    this.dataManager.choice = choice
    this.dataManager.role = role
    console.log(dataManager);

}
//runs the program starting with manager
inquirer
    .prompt(Manager)
    .then((dataManager) => {
        console.log(dataManager.name, dataManager.id, dataManager.email, dataManager.officeNum)
        if (dataManager.choice === 'Yes' && dataManager.role === 'Engineer') {
            getName();
            //getRole();
            inquirer
                .prompt(Engineer)
                .then((dataEngineer) => {
                    console.log(dataEngineer)
                })
        } else
            if (dataManager.choice === 'Yes' && dataManager.role === 'Intern') {
                getName();
                inquirer
                    .prompt(Intern)
                    .then((dataIntern) => {
                        console.log(`The data for the intern is ${dataIntern}`);
                    })
            } else {
                console.log('You have chosen to not add any team members')
            }
    });

