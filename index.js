const CLI = require('./lib/CLI');
const GenerateLogo = require('./lib/generateLogo');

// Calling the promptUser method of the CLI module, which returns a Promise
CLI.promptUser()
// Once the Promise is resolved, the then() method is called with the resolved value (answers) as its argument
.then((answers) => {
  // Calling the generate method of the GenerateLogo module, passing in the resolved answers from the CLI prompt
  GenerateLogo.generate(answers.text, answers.textColor, answers.shape, answers.shapeColor);
});
