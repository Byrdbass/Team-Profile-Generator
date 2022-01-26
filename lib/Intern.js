const inquirer = require('inquirer');
const fs = require('fs');

const dataIntern = [
    {
        type: 'input',
        message: "What is your Team Member's School they attend?",
        name: 'school',
    }
]  

module.exports = dataIntern;