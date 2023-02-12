class Colour {
  // Converts hex code to RGB values
  static hexToRGB(hexCode) {
    // Get the RGB colour value by slicing up the 7 character (excluding #) hex code and converting it into a number between 0 and 255
    const r = parseInt(hexCode.slice(1, 3), 16); //16 is a radix integer that defines the parsedInt as hexadecimal
    const g = parseInt(hexCode.slice(3, 5), 16);
    const b = parseInt(hexCode.slice(5, 7), 16);
    // Return the RGB values in an array
    return [r, g, b];
  }
}

// Export the class for external use
module.exports = Colour;
