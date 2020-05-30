
const argumentA = document.querySelector('#argumentA');
const argumentB = document.querySelector('#argumentB');
const mathOption = document.querySelector('#mathOption');
const calcBtn = document.querySelector('#calcBtn');

const resultEl = document.querySelector('#result');
const errorEl = document.querySelector('#error');


calcBtn.addEventListener('click', onCalcBtnClick);


function onCalcBtnClick() {

    hideContainers();

    if (isValid(argumentA.value) && isValid(argumentB.value)) {
        const result = calculate(
            +argumentA.value,
            +argumentB.value,
            mathOption.value
        );

        showResult(result);
    } else {
        showError();
    }    
}


function hideContainers() {
    resultEl.classList.add('hidden');
    errorEl.classList.add('hidden');
}

function isValid(value) {
    return !!value;
}

function showResult(result) {
    resultEl.textContent = 'Result: ' + result;

    resultEl.classList.remove('hidden');
}

function showError() {
    errorEl.classList.remove('hidden');
}



function calculate(argA, argB, action) {

        switch(action) {
        case 'add': return argA + argB;
        case 'sub': return argA - argB;
        case 'div': return argA / argB;
        case 'mult': return argA * argB;
        case 'min': return Math.min(argA,argB);
        case 'max': return Math.max(argA,argB);
    }
}



















