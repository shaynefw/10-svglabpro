const fs = require('fs');
const GenerateLogo = require('../generateLogo');

// A Jest statement to mock the fs module.
jest.mock('fs');

// The following test function tests if the generate method of the GenerateLogo module creates the expected SVG and HTML files.
test('generate method creates SVG and HTML files', () => {
  
  // The generate method is called with arguments: 'ABC', '#000000', 'circle', '#FF0000'  
  const { svg, html } = GenerateLogo.generate('ABC', '#000000', 'circle', '#FF0000');

  // Checks if the writeFileSync method of the fs module has been called two times
  expect(fs.writeFileSync).toHaveBeenCalledTimes(2);

  // Checks if the writeFileSync method of the fs module has been called with the first argument 'logo.svg' and the second argument 'svg'.
  expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', svg);

  // Checks if the writeFileSync method of the fs module has been called with the first argument 'viewSvg.html' and the second argument 'html'.
  expect(fs.writeFileSync).toHaveBeenCalledWith('viewSvg.html', html);
  
});