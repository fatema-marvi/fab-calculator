#! /usr/bin/env node
import inquirer from "inquirer";
//as inquirer gives error so install dependencies,
const answer = await inquirer.prompt([{
message:"enter first number",
type: "number",
name: "firstNumber"},

{message:"enter second number",
type: "number",
name: "secondNumber"},

{message: "select one of the operator to perform",
type: "list",
name: "operator",
choices: ["Addition", "subtraction", "multiplication", "division"],},
]);

//conditional statements
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);}

else if (answer.operator ==="subtraction") {
    console.log(answer.firstNumber - answer.secondNumber); }

else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);}

 else if (answer.operator ==="division") {
        console.log(answer.firstNumber / answer.secondNumber);}

        else {console.log ("please select valid operator")
    }