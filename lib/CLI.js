// Importing the 'inquirer' library
const inquirer = require('inquirer');

class CLI {
  // Defining a static method called promptUser
  static promptUser() {
    // An array of objects representing questions to be prompted in terminal
    const response = [
      {
        type: 'input',
        name: 'continue',
        message: 'Welcome to SVG Lab Pro (Press Enter to continue...)',
      },
      {
        type: 'input',
        name: 'text',
        message: 'Please enter logo text (up to 3 characters): ',
        //ensure that the user no more than 3 characters
        validate: (input) => (input.length > 3) ? 'Text cannot be longer than 3 characters' : true
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (hex code or color keyword): '
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select shape: ',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (hex code or color keyword): '
      }
    ];
    // Return the result of the prompt from the user, passing it in as the response array
    return inquirer.prompt(response);
  }
}

// Exporting the CLI class as a module
module.exports = CLI;
  