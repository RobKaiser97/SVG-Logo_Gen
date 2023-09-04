// Importing required Node.js modules
const inquirer = require('inquirer');
const fs = require('fs');

// Importing custom modules for generating logo and shapes
const logo = require("./lib/logoGen"); // 'logo' class for SVG generation
const { Circle, Square, Triangle } = require("./lib/shapes"); // Shape classes

// Questions array for inquirer prompt
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters to display in your image:',
        // Validation to check if exactly 3 characters are entered
        validate: function (input) {
            if (input.length !== 3) {
                return 'Please enter 3 characters.';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'shapes',
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
    }
];

// Function to write the SVG data to a file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// Function to generate SVG based on user inputs
const genSVG = ({text, shapes, color, fontColor}) => {
  let svgLogo = new logo();  // Create a new SVG logo instance

  let shapeInstance;
  // Determine which shape to create based on user input
  switch (shapes) {
    case 'Circle':
      shapeInstance = new Circle(color);
      break;
    case 'Square':
      shapeInstance = new Square(color);
      break;
    case 'Triangle':
      shapeInstance = new Triangle(color);
      break;
    default:
      console.log("Invalid entry");
      return;
  }
  
  // Add shape and text to the SVG logo
  svgLogo.addShape(shapeInstance);
  svgLogo.addText(text, fontColor);

  // Write the generated SVG to a file
  writeToFile('logo.svg', svgLogo.generateSVG());
}

// Main function to initiate the inquirer prompt
const init = () => {
    inquirer.prompt(questions)
        .then(answers => {
            // Generate SVG when we get all the answers
            genSVG(answers);
        })
        .catch(error => {
            if (error) {
                console.log("Error: ", error);
            }
        });
}

// Run the main function to start the application
init();
