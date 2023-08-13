// required modules
// inquirer, cli interface for user input: https://www.npmjs.com/package/inquirer  
const inquirer = require("inquirer");
// file system module: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_file_system
const fs = require("fs");

// TODO: prompt user for input
function promptUser() {
    inquirer.prompt([

        // prompt for 3 characters for logo text
        {
            type: "input",
            name: "text",
            message: "enter three characters for the text for your logo"
        },

        // text color prompt
        {
            type: "list",
            name: "textColor",
            message: "enter the color of the text for your logo",
            choices: [
                "ivory", "white", "silver"
            ],
        },

        // shape choices
        {
            type: "list",
            name: "shape",
            message: "enter the shape of your logo",
            choices: [
                "circle", "square", "triangle"
            ],
        },

        // prompt for logo color
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

// TODO: call promptUser function
promptUser();

