const Shapes = require('../shapes');

test('A circle successfully returns as expected from the SVG attributes', () => {

    // Tests if the Shapes module returns the expected string of an SVG shape
    expect(Shapes.circle('#FF0000')).toBe('<circle cx="150" cy="100" r="50" fill="#FF0000" />');
    expect(Shapes.triangle('#00FF00')).toBe('<polygon points="75,25 150,175 225,25" fill="#00FF00" />');
    expect(Shapes.square('#0000FF')).toBe('<rect x="75" y="25" width="150" height="150" fill="#0000FF" />');
    
});