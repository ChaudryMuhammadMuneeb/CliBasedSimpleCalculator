#! /usr/bin/env node
import inquirer from 'inquirer';
const numbers = await inquirer.prompt([
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
        validate: input => !isNaN(input) ? true : 'Please enter a valid number',
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
        validate: input => !isNaN(input) ? true : 'Please enter a valid number',
    },
]);
const operator = await inquirer.prompt([
    {
        type: 'list',
        name: 'operation',
        message: 'Select operation: ',
        choices: ['+', '-', 'x', '/'],
    },
]);
if (operator.operation === "+") {
    console.log(`Result of + : `, parseInt(numbers.num1) + parseInt(numbers.num2));
}
else if (operator.operation === "-") {
    console.log(`Result of - : `, parseFloat(numbers.num1) - parseFloat(numbers.num2));
}
else if (operator.operation === "x") {
    console.log(`Result of * : `, parseFloat(numbers.num1) * parseFloat(numbers.num2));
}
else if (operator.operation === "/") {
    if (numbers.num2 === 0) {
        throw new Error('Cannot divide by zero!');
    }
    console.log(`Result of / : `, parseFloat(numbers.num1) / parseFloat(numbers.num2));
}
