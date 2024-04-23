const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes.js");

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
        message: "Please choose a color for your shape (pick either a color keyword or a hexadecimal number)"
    },
  ]).then((answers) => {
    if (answers.text.length > 3) {
      console.log("Please make sure your answer is no longer than 3 characters");
      promptUser();
    } else {
      writeToFile("logo.svg", answers);
    }
  });
};

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;
    let shapeChoice;
    if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        svgString += `<circle cx="50% cy="50% r="100" height="100%" width="100%" fill="${this.color}">`;
    } else if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
    } else {
        shapeChoice = new Square();
        svgString += `<rect x="50" height="200" width="200" fill="${this.color}">`;
    }
  
    
   
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }
  

promptUser();