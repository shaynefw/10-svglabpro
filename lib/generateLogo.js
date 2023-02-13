const fs = require('fs');
const Shapes = require('./Shapes');
const Colour = require('./Colour');

class GenerateLogo {
  // Define the generate method for generating a logo
  static generate(text, textColor, shape, shapeColor) {
    // Convert the shapeColor from hex to RGB format
    const rgb = Colour.hexToRGB(shapeColor);
    // Get the code for the specified shape
    const shapeCode = Shapes[shape](shapeColor);

    // Define the SVG code for the logo
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        // Include the shape code
        ${shapeCode}
        // Add the text to the SVG, with the specified text color and font size
        <text x="150" y="120" fill="${textColor}" font-size="60" text-anchor="middle">${text}</text>
      </svg>
    `;

    // Define the HTML code for displaying the logo
    const htmlCode = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Generated Logo</title>
      </head>
      <body>
        <h1>The SVG image below was generated from scripts!</h1>
        ${svgCode}
      </body>
      </html>
    `;

    let filesGenerated = false; // Initialize the flag to indicate if the files were generated successfully
    try {
      fs.writeFileSync('logo.svg', svgCode); // Write the `svgCode` to the `logo.svg` file
      fs.writeFileSync('viewSvg.html', htmlCode); // Write the `htmlCode` to the `viewSvg.html` file
      filesGenerated = true; // flag that indicates the files were generated successfully
    } catch (error) {
      console.error(error); // Log the error if any occurred during the file generation process
    }

    const genMessage = filesGenerated ? 'Generated logo.svg!' : 'File generation failed!'; // Get the message based on the flag
    return {
      svg: svgCode,
      html: htmlCode,
      message: genMessage
    }; // Return the generated SVG and HTML code
  };
};

module.exports = GenerateLogo;