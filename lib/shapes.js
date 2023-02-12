class Shapes {
    // Returns an SVG shape element with specified fill color
    static circle(color) {
      return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
    }
    static triangle(color) {
      return `<polygon points="75,25 150,175 225,25" fill="${color}" />`;
    }
    static square(color) {
      return `<rect x="75" y="25" width="150" height="150" fill="${color}" />`;
    }
  }
  
  // Exports the Shapes class for use in other parts of the application
  module.exports = Shapes;
  