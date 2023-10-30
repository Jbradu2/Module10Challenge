// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

//Create an array of questions for user input
const questions = [
  // WHEN I am prompted for text
  // GIVEN a command-line application that accepts user input
  // THEN I can enter up to three characters
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
  },
  // WHEN I am prompted for the text color
  // THEN I can enter a color keyword (OR a hexadecimal number)
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):',
  },
  // WHEN I am prompted for a shape
  // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    // WHEN I am prompted for the shape's color
    // THEN I can enter a color keyword (OR a hexadecimal number)
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):',
  },
];


// WHEN I have entered input for all the prompts
inquirer.prompt(questions).then((anwsers) => {

  const text= anwsers.text;
  const textColor = anwsers.textColor;
  const shape =anwsers.shape;
  const shapeColor = anwsers.shapeColor;

  const generatedLogo= logoGenerator.generatedLogo (text, textColor, shape, shapeColor);
  
  // THEN an SVG file is created named `logo.svg`
  fs.writeFile('logo.svg');
  // AND the output text "Generated logo.svg" is printed in the command line
  console.log("Generated logo.svg");
});
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered