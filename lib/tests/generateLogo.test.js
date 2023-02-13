const fs = require('fs');
const GenerateLogo = require('../generateLogo');

jest.mock('fs');

test('generate method creates SVG and HTML files', () => {
  const { svg, html } = GenerateLogo.generate('ABC', '#000000', 'circle', '#FF0000');
  expect(fs.writeFileSync).toHaveBeenCalledTimes(2);
  expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', svg);
  expect(fs.writeFileSync).toHaveBeenCalledWith('viewSvg.html', html);
});


