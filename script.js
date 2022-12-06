const display=document.querySelector(".calculator-input");
const keys=document.querySelector(".calculator-keys");


let displayValue="0";
let firstValue=null;
let operator=null;
let waiting=false;

updateDisplay();

function updateDisplay() {
    display.value=displayValue;
    
}

keys.addEventListener("click",function(e) {
    const element=e.target;

    if(!element.matches("button")) return;
    switch(element.value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            handleOperator(element.value);
            break;
        case ".":
            inputDecimal();
            break;
        case "clear":
            clear();
            break;
            default:
                inputNumber(element.value);
    }
    updateDisplay();
});

function inputNumber(num) {
    if(waiting) {
     displayValue=num;
     waiting=false;
    }
    else {
     displayValue=displayValue==="0"? num:displayValue+num;
    }
 }
 
function clear() {
    displayValue ="0";
}

function handleOperator(nextOperator) {
    const value=parseFloat(displayValue);

    if(firstValue===null) {
        firstValue=value;
    }
    else if(operator) {
        const result=calculate(firstValue,value,operator);
        displayValue=String(result);
        firstValue=result;
    }
    waiting=true;
    operator=nextOperator;
}
function calculate(first,second,operator) {
    if(operator==="+") {
        return first + second;
    }
    if(operator==="-") {
        return first - second;
    }
    if(operator==="*") {
        return first * second;
    }
    if(operator==="/") {
        return first / second;
    }
    return second;
}