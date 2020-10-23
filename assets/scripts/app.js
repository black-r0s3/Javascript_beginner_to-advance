const defaultResult = 0;
let currentResult = defaultResult;

function addNumbers(num1, num2){
    const result = num1 + num2;
    alert('The result is ' + result);
}

addNumbers(4,3);
addNumbers(2,9);

currentResult = currentResult + (20 -5)  * 5;

let calculationDescription = '(' +'currentResult' + '(20 -5)  * 5' +')';

outputResult(currentResult, calculationDescription) ;