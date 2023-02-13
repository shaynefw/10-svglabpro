const Colour = require('../colour');

test('hextToRGB converts hex code to rgb successfully', () => {

    // Check if the hexToRGB function converts hex code to rgb
    expect(Colour.hexToRGB('#FF0000')).toEqual([255, 0, 0]);
    expect(Colour.hexToRGB('#00FF00')).toEqual([0, 255, 0]);
    expect(Colour.hexToRGB('#0000FF')).toEqual([0, 0, 255]);

});