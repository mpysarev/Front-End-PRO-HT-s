const action = prompt(`Выберите одно из действий => add, sub, div, mult, pow
                                                => sin, cos, tan`);

// let firstNum;
// let secondNum;
// let thirdNum;


switch (action) {
    case 'add': funOne(); break;
    case 'div': funOne(); break;
    case 'sub': funOne(); break;
    case 'mult': funOne(); break;
    case 'pow': funOne(); break;
    case 'cos': funTwo(); break;
    case 'sin': funTwo(); break;
    case 'tan': funTwo(); break;
    // default: console.log('I donno');
}

switch (action) {
    case 'add': console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`); break;
    case 'sub': console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`); break;
    case 'div': console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`); break;
    case 'mult': console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`); break;
    case 'pow': console.log(`${firstNum} ^ ${secondNum} = ${Math.pow(firstNum, secondNum)}`); break;
    case 'cos': console.log(`cos${thirdNum} = ${Math.cos(thirdNum)}`); break;
    case 'sin': console.log(`sin${thirdNum} = ${Math.sin(thirdNum)}`); break;
    case 'tan': console.log(`tan${thirdNum} = ${Math.tan(thirdNum)}`); break;
    default: console.log('Have no idea');
}



function funOne() {
    firstNum = +prompt('Введите первую цифру');
    secondNum = +prompt('Введите вторую цифру');
}

function funTwo() {
    thirdNum = +prompt('Введите цифру');
}



