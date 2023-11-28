const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class SVG{
    constructor(){
        this.textEl = ''
        this.shapeEl = ''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shapeEl}
            ${this.textEl}
        </svg>`;
    }
    setTextEl(text, color) {
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render()
    }
};

const questions = [
    {
        type: 'input',
        message: 'What would you like to display as the text? Enter up to 3 characters, example SVG.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like the text to be? Enter a color keyword or hexadecimal color code number.',
        name: 'text-color'
    },
    {
        type: 'list',
        message: 'Choose what shape you would like',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be? Enter a color keyword or hexadecimal color code number.',
        name: 'shape-color'
    }
];

// Function to create a new SVG file with users input 
function createSVG(response){
    const svgString = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${response.shapeEl}
        ${response.textEl}
    </svg>`;

    fs.writeFile('./examples/logo.svg', svgString, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('A new logo.svg has been created and saved to examples');
        }
    });
};

async function init() {
    const response = await inquirer.prompt(questions);
    const svg = new SVG();

    // Confirm text length
    if (!confirmTextLength(response.text)) {
        console.log('Error: Text must be up to 3 characters. Please try again.');
        return;
    };

    // Sets the text/text color
    svg.setTextEl(response.text, response['text-color']);
    
    // Correctly identifies the chosen shape from shapes.js
    let shape;
    if (response.shape === 'circle') {
        shape = new Circle();
    } else if (response.shape === 'square') {
        shape = new Square();
    } else if (response.shape === 'triangle') {
        shape = new Triangle();
    }
    
    // Sets the color for the shape
    shape.setColor(response['shape-color']);
    svg.setShapeEl(shape);

    createSVG(svg);
};

function confirmTextLength(text) {
    return text.length <= 3;
};

module.exports = {
    confirmTextLength
};

init();
