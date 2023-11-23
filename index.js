const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

class SVG{
    constructor(){
        this.textEl = ''
        this.shapeEl = ''
    }
    render(){
        return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    }
    setTextEl(text, color){
        this.textEl = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>'
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render()
    }
}

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
        type: 'input',
        message: 'What color would you like the shape to be? Enter a color keyword or hexadecimal color code number.',
        name: 'shape-color'
    },
    {
        type: 'list',
        message: 'Choose what shape you would like',
        choices: ['circle', 'square', 'triangle']
        name: 'shape'
    },
]