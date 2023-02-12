const CLI = require('../CLI');
const inquirer = require('inquirer');

// Import jest and mock the inquirer module
jest.mock('inquirer');

// Test the promptUser function of the CLI module
test('promptUser returns expected values', () => {
    // Mock the prompt method of the inquirer module to return a resolved value
    inquirer.prompt.mockResolvedValue({
        text: 'abc',
        textColor: '#000000',
        shape: 'circle',
        shapeColor: 'blue'
    });

    // Call the promptUser method and return the promise it returns
    return CLI.promptUser()
    // Check the answer received from the promise
    .then((answer) => {
        // Check if the answer.xyz matches resolved mock value
        expect(answer.text).toBe('abc');
        expect(answer.textColor).toBe('#000000');
        expect(answer.shape).toBe('circle');
        expect(answer.shapeColor).toBe('blue')
    });
});