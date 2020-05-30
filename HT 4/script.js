
const userAction = getAction();
const userCount = getCount();
const userNums = getNums();

calculate(userAction, userNums);




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

function getCount() {
    let count;

    do {
        count = +prompt('Введите цифру больше единицы');
    } while (!(count >= 2))
    
    return count;
}

function getNums() {
    let numsArr = [];
    for (let i = 0; i < userCount; i++) {
        numsArr [i] = +prompt('Введите любую цифру');
    }

    return numsArr;
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




