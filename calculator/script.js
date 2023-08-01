const display=document.querySelector('.calculator-input');
const keys=document.querySelector('.calculator-keys');

let displayValue='0';
let firstValue= null;
let operator= null;
let waitingForSecondValue = false;


uptadeDisplay();

function uptadeDisplay(){
    display.value=displayValue;
}

keys.addEventListener('click', function(e) {
    const element=e.target;
    if(!element.matches('button'))
    return;

    if(element.classList.contains('operator')){
        // console.log('operator', element.value);
        handleOperator(element.value);
        uptadeDisplay();
        return;
    }
    
    if(element.classList.contains('clear')){
        // console.log('clear', element.value);
        clear();
        uptadeDisplay(); 
        return;
    }
    if(element.classList.contains('decimal')){
        // console.log('decimal', element.value);
        inputDecimal();
        
        return;
    }
    if(element.classList.contains('equal-sign')){
        console.log('equal-sign', element.value);
        return;
    }
    InputNumber(element.value);
    uptadeDisplay();
    // console.log('number', element.value);
    
});

function handleOperator(nextOperator){
    const value = parseFloat(displayValue);

    if (firstValue=== null){
        firstValue=value;
    } else if(operator){
        const result = calculate(firstValue,value,operator);

        displayValue=String(result);
        firstValue=result;
    }
    waitingForSecondValue=true;

    operator= nextOperator;
}

function calculate(first,second,operator){
    if(operator === '+' ){
        return first + second;
    }else  if(operator === '-' ){
        return first -second;
    }else  if(operator === '*' ){
        return first*second;
    }else  if(operator === '/' ){
        return first/second;
}
    return second;
}

function InputNumber(num){
    if(waitingForSecondValue){
        displayValue=num;
        waitingForSecondValue=false;
    }else{
        displayValue=displayValue ==='0' ? num: displayValue + num ;
    }
   
}
function inputDecimal(){
    if (!displayValue.includes('.')){
        displayValue += '.';
    }
}
function clear(){
    displayValue='0';
}
