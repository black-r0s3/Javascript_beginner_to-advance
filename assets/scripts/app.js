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


function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation : operationIdentifier,
        prevResult : prevResult,
        number : operationNumber,
        result : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation)
    console.log(logEntries);
}

function calculationResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD"){
        currentResult += enteredNumber;
        mathOperator = '+'
    } else{
        currentResult -= enteredNumber;
        mathOperator = '-'
    }
   
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}



function addNumbers(){
    calculationResult("ADD");
}    

function subtract(){
   calculationResult("SUBTRACT");
}


function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}


function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', addNumbers);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);