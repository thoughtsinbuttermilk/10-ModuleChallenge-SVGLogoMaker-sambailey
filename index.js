// required modules
// inquirer, cli interface for user input: https://www.npmjs.com/package/inquirer  
const inquirer = require("inquirer");
// extend built-in inquirer prompt: https://www.npmjs.com/package/inquirer-prompt  see: https://github.com/jwarby/inquirer-maxlength-input-prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
// file system module: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_file_system
const fs = require("fs");

// import shape classes
const {Circle, Square, Triangle} = require("./lib/shapes.js");

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// DONE: write svg file to disk
// use function writeToFile to write svg file to disk: params are fileName and answers
function writeToFile(fileName, answers) {
    // initial content of svg file
    // inline embedded of google fonts; github strips style tag when rendering, renders correctly in HTML or locally in browser
    svgFileStart = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <style>
        @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i");
    </style>
    `;
    
    let userShape;
    if (answers.shape === "circle") {
        userShape = new Circle();
        svgFileStart += `<circle cx="130" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "square") {
        userShape = new Square();
        svgFileStart += `<rect x="50" y="50" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
        (answers.shape === "triangle")
        userShape = new Triangle();
        // TODO: modify triangle position to better center text alignment relative circle and square shapes
        svgFileStart += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    }

    // text content of svg file
    svgFileStart += `<text x="95" y="135" font-family="Roboto Condensed, sans-serif" font-size="40" fill="${answers.textColor}">${answers.text}</text>
    `
    // close svg file
    svgFileStart += `
    </svg>`;

    fs.writeFile(fileName, svgFileStart, (err) => {
        err ? console.log(err) : console.log("generated logo.svg");
    });
}

// DONE: prompt user for input
function promptUser() {

    console.log("welcome to the logo generator!\ncreate your logo.svg file with three characters for the text for your logo.\nuse svg color keywords: https://upload.wikimedia.org/wikipedia/commons/2/2b/SVG_Recognized_color_keyword_names.svg\nor hexadecimal values for the color of the text and the shape of your logo. \n");

    inquirer.prompt([

        // TODO: requirements specify user choice of color by svg color keywords or hexadecimal number
        // DONE! YAY! tests 3 tests written and passing! focusing on figuring how to use jest to test; come back to this after you have a working test

        // prompt:  3 characters for logo text
        {
            type: "maxlength-input",
            name: "text",
            message: "enter three characters for the text for your logo",
            maxLength: 3
        },

        // prompt: text color
        // svg color keywords: https://upload.wikimedia.org/wikipedia/commons/2/2b/SVG_Recognized_color_keyword_names.svg
        {
            type: "list",
            name: "textColor",
            message: "enter the color of the text for your logo",
            choices: [
                "ivory", "white", "silver"
            ],
        },

        // prompt: shape choices
        {
            type: "list",
            name: "shape",
            message: "enter the shape of your logo",
            choices: [
                "circle", "square", "triangle"
            ],
        },

        // prompt: logo color
        {
            type: "list",
            name: "shapeColor",
            message: "enter the color for the shape of your logo",
            choices: [
                "slategrey", "black", "darkslateblue"
            ],
        },
    ])
    .then((answers) => {
        writeToFile("logo.svg", answers);
      });
};

// DONE: call promptUser function

promptUser();