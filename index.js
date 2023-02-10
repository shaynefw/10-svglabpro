const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        name: 'key',
        type: 'press-to-continue',
        message: 'Welcome to SVG Labs Pro press any key to start creating your logo...'
    },
    {
        name: 'input',
        message: 'What name or initials would you like to be on the logo? (maximum 3 characters)',
        validate: (input) => input.length <= 3 ? true : 'Please enter up to 3 characters.'
    }
])
.then((response) => {
    console.log('File creation test!');
});