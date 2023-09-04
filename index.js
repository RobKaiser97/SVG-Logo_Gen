const inquirer = require('inquirer');
const fs = require('fs');
const logo = require("./lib/logo");
const { Circle, Square, Triangle } = require("./lib/shapes");
const shapes = [Circle, Square, Triangle];
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters to display in your image:',
        validate: function (input) {
            if (input.length !== 3) {
                return 'Please enter 3 characters.';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to use for the shape?',
        default: 'red'
    },
    {
        type: 'input',
        name: 'fontColor',
        message: 'What color would you like to use for the text?',
        default: 'white'
    },
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) 
          throw err;
        console.log('The file has been saved!');
    });
}
