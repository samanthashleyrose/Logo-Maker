// Circle Test
const { Circle } = require('../lib/shapes.js');

describe('Circle', () => {
    it('render() should return the correct circle SVG string', () => {
        const circle = new Circle();
        circle.setColor(this.color);
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.color}" />`);
    });
});

// Square Test
const { Square } = require('../lib/shapes.js')

describe('Square', () => {
    it('render() should return the correct rect SVG string', () => {
        const square = new Square();
        square.setColor(this.color);
        expect(square.render()).toEqual(`<rect x="50" height="100" width="100" fill="${this.color}">`);
    });
});

// Triangle Test
const { Triangle } = require('../lib/shapes.js')

describe('Triangle', () => {
    it('render() should return the correct polygon SVG string', () => {
        const triangle = new Triangle();
        triangle.setColor(this.color);
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`);
    });
});