const defaultResult = 0;
let currentResult = defaultResult;



function addNumbers(){
     currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '') ;
}



addBtn.addEventListener('click', addNumbers);

