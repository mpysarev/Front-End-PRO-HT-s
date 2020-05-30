const action = prompt('Выберите действие => add, sub, div, mult');
const firstNum = +prompt('Введите первое число');
const secondNum = +prompt('Введите второе число');


switch (action) {
    case 'add': console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`); break;
    case 'sub': console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`); break;
    case 'div': console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`); break;
    case 'mult': console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`); break;
    default: console.log('Have no idea');
}
