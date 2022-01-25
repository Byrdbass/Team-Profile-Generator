const inquirer = require('inquirer');
const fs = require('fs');

const dataManager = [
    {
        type: 'input',
        message: 'What is your Team Members office number?',
        name: 'officeNum',
    },
    {
        type: 'list',
        message: 'Is your Next Team Member an Engineer, or Intern?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'Would you like to continue building your team?']
    }    
]
 //this needs to jump to the data from other files depending on what they pick

//     inquirer
//     .prompt(data)
//     .then((response) =>{
//     console.log(data)
//     fs.writeFileSync('README.MD', generateREADME(response), (err) => 
//     err? console.log(err) : console.log('response written to file') );
// })