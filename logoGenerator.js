// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

// Import the shapes classes
const { Circle, Triangle, Square } = require('./shapes');

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

// Define an object to map shape options to their corresponding classes
const shapeClasses = {
  circle: Circle,
  triangle: Triangle,
  square: Square,
};


// WHEN I have entered input for all the prompts
function generateLogo(){
inquirer.prompt(questions).then((anwsers) => {

  const text= anwsers.text;
  const textColor = anwsers.textColor;
  const shapeType =anwsers.shape;
  const shapeColor = anwsers.shapeColor;



if (shapeType in shapeClasses) {
const shape = new shapeClasses[shapeType]();
    shape.setColor(shapeColor);


  // WHEN I open the `logo.svg` file in a browser
  // THEN I am shown a 300x200 pixel image that matches the criteria I entered

  const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="150" fill="${textColor}" text-anchor="middle">${text}</text>
</svg>
  `;
  // THEN an SVG file is created named `logo.svg`
  fs.writeFileSync('logo.svg', svgContent);
  // AND the output text "Generated logo.svg" is printed in the command line
  console.log("Generated logo.svg");
}else {
  console.log('Invalid shape selection');
}
});
}

// Export the generateLogo function
module.exports = { generateLogo };