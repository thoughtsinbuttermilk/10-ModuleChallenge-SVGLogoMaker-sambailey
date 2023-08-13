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

// TODO: write svg file to disk
// use function writeToFile to write svg file to disk: params are fileName and answers
function writeToFile(fileName, answers) {
    // initial content of svg file
    svgFileStart = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    
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
        svgFileStart += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    }

    // close svg file
    svgFileStart += "</svg>";

    fs.writeFile(fileName, svgFileStart, (err) => {
        err ? console.log(err) : console.log("generated logo.svg");
    });
}

// DONE: prompt user for input
function promptUser() {
    inquirer.prompt([

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