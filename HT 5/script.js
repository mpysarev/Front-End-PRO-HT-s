
const userAction = getAction();
const userInput = getInput();
const userNumbers = transformInputToNums(userInput);


calculate(userAction, userNumbers);




function calculate(action, nums) {
    switch (action) {
        case 'add': add(nums); break;
        case 'sub': sub(nums); break;
        case 'div': div(nums); break;
        case 'mult': mult(nums); break;
        default: console.log('Have no idea');
    }  
}

function checkUserAction(value) {
    switch (value) {
      case 'add':
      case 'sub':
      case 'div':
      case 'mult':
        return value;
    }
}
  


function getAction() {
    let action;

    do {
        action = prompt('Выберите действие => add, sub, div, mult');
    } while (!checkUserAction(action));    
    
    return action;
}


function getInput() {
    let numsArr = prompt('Введите минимум две цифры через пробел!');

    return numsArr;
}

function transformInputToNums (input) {

    let inputArr = input.split(' ');

    let numbers = inputArr.map(function(item, index, arr) {

        let arrNum = +item;
        return isNaN(arrNum)? item : arrNum;
    });

    return numbers;
}


function add (numsArr) {
    let result = numsArr[0];
    let expression = result;

    for (let i = 1; i< numsArr.length; i++){
        result = result + numsArr [i];
        expression = expression + ' + ' + numsArr [i];
    } 

    console.log(expression + ' = ' + result);
}

function sub (numsArr) {
    let result = numsArr[0];
    let expression = result;

    for (let i = 1; i< numsArr.length; i++){
        result = result - numsArr [i];
        expression = expression + ' - ' + numsArr [i];
    } 

    console.log(expression + ' = ' + result);
}

function div (numsArr) {
    let result = numsArr[0];
    let expression = result;

    for (let i = 1; i< numsArr.length; i++){
        result = result / numsArr [i];
        expression = expression + ' / ' + numsArr [i];
    } 

    console.log(expression + ' = ' + result);
}

function mult (numsArr) {
    let result = numsArr[0];
    let expression = result;

    for (let i = 1; i< numsArr.length; i++){
        result = result * numsArr [i];
        expression = expression + ' * ' + numsArr [i];
    } 

    console.log(expression + ' = ' + result);
}




