const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//obtains input from input area
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc,calcNumber ){
    const calcDescripton = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescripton) ; //from vendor.js file
}


function addNumbers(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    const logEntry = {
        operation : 'ADD',
        prevResult : initialResult,
        number : enteredNumber,
        result : currentResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}    

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}


function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}


function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', addNumbers);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);