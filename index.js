// required modules
// inquirer, cli interface for user input: https://www.npmjs.com/package/inquirer  
const inquirer = require("inquirer");
// extend built-in inquirer prompt: https://www.npmjs.com/package/inquirer-prompt  see: https://github.com/jwarby/inquirer-maxlength-input-prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
// file system module: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_file_system
const fs = require("fs");

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

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
                "slategrey", "black", "drakeslateblue"
            ],
        },
    ])
}

// DONE: call promptUser function
promptUser();

