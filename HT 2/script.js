const userNumber1 = +prompt('Введите первое число');
const userNumber2 = +prompt('Введите второе число');


// Сложение

const add = adding(userNumber1, userNumber2);

function adding(number1, number2) {
    console.log(String(number1) + '+' + String(number2) + '=' + (number1 + number2))

    return number1 + number2
}

// Вычетание

const sub = substract(userNumber1, userNumber2);

function substract(number1, number2) {
    console.log(String(number1) + '-' + String(number2) + '=' + (number1 - number2))

    return number1 - number2
}

// Деление

const div = divide(userNumber1, userNumber2);

function divide(number1, number2) {
    console.log(String(number1) + '/' + String(userNumber2) + '=' + (number1 / number2))

    return number1 / number2
}

// Умножение

const mult = multiply(userNumber1, userNumber2);

function multiply(number1, number2) {
    console.log(String(number1) + '*' + String(number2) + '=' + (number1 * number2))

    return number1 * number2
}
