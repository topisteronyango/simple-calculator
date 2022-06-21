// taking the operand input
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

// take the operator input
const operator = prompt('Enter operator from the this list: +, -, *, /, %');

let result;

// using if...else if... else
if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}

else if (operator == '%'){
    result = num1 % num2;
}

else {
    result = num1 / num2;
}

// display the result
alert(result)
