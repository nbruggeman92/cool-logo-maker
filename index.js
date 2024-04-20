const fs = require("fs");
const inquirer = require("inquirer");
const colors = require("colors");

function promptUser() {
    inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Please enter your text (max 3 characters)",
    },
    {
        type: "input",
        name: "textColor",
        message: "Please choose a color for your text (pick either a color keyword or a hexadecimal number)",
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose a shape from the following options:",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please choose a color for your shape (pick either a color keyword or a hexadecimal number)",
    },

    ]).then((data) => {
        if (data.text.length > 3) {
            console.log("Your answer must be a maximum of 3 characters");
    }
  });
}

  promptUser();