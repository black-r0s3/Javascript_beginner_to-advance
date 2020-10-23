const defaultResult = 0;
let currentResult = defaultResult;

function addNumbers(num1, num2){
    const result = num1 + num2;
    return result;
}

currentResult = addNumbers(4,3);

let calculationDescription = '(' +'currentResult' + '(20 -5)  * 5' +')';

outputResult(currentResult, calculationDescription) ;