const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function addNumbers(){
    const enteredNumber = getUserNumberInput();
    const calcDescripton = `${currentResult} + ${enteredNumber}`;
     currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescripton) ;
}


  
addBtn.addEventListener('click', addNumbers);

