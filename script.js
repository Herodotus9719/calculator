
function add(...args) {
    let total = 0;
    for (let n of args) {
        total += n;
    }
    return total;
}

function substract(...args) {
    let total = args[0];
    for (let n = 1; n <= args.length - 1; n++) {
        total -= args[n];
    }
    return total;
}

function multiply(...args) {
    let total = args[0];
    for (let n = 1; n <= args.length - 1; n++) {
        total *= args[n];
    }
    return total;
}

function divide(...args) {
    let total = args[0];
    for (let n = 1; n <= args.length - 1; n++) {
        total /= args[n];
    }
    return total;
}

function operate(operator, ...nums) {
    if (operator === '+') {
        return add(...nums);
    } else if (operator === '-') {
        return substract(...nums);
    } else if (operator === '*') {
        return multiply(...nums);
    } else if (operator === '/') {
        return divide(...nums);
    }
}



const buttons = document.querySelectorAll('button');


let displayValue = '';
let operator = '';
let number1 = NaN;
let number2 = NaN;
let dotUsed = false;

const result = document.querySelector('.item1');

const num1 = document.querySelector('.item2');
const num2 = document.querySelector('.item3');
const num3 = document.querySelector('.item4');
const num4 = document.querySelector('.item6');
const num5 = document.querySelector('.item7');
const num6 = document.querySelector('.item8');
const num7 = document.querySelector('.item10');
const num8 = document.querySelector('.item11');
const num9 = document.querySelector('.item12');
const num0 = document.querySelector('.item14');


const del = document.querySelector('.item5');
const minus = document.querySelector('.item9');
const plus = document.querySelector('.item13');
const dot = document.querySelector('.item15');
const star = document.querySelector('.item16');
const slash = document.querySelector('.item17');
const enter = document.querySelector('.item18');

num1.addEventListener('click', () => {
    displayValue += "1";
    result.textContent = displayValue;
});
num2.addEventListener('click', () => {
    displayValue += "2";
    result.textContent = displayValue;
});
num3.addEventListener('click', () => {
    displayValue += "3";
    result.textContent = displayValue;
});
num4.addEventListener('click', () => {
    displayValue += "4";
    result.textContent = displayValue;
});
num5.addEventListener('click', () => {
    displayValue += "5";
    result.textContent = displayValue;
});
num6.addEventListener('click', () => {
    displayValue += "6";
    result.textContent = displayValue;
});
num7.addEventListener('click', () => {
    displayValue += "7";
    result.textContent = displayValue;
});
num8.addEventListener('click', () => {
    displayValue += "8";
    result.textContent = displayValue;
});
num9.addEventListener('click', () => {
    displayValue += "9";
    result.textContent = displayValue;
});
num0.addEventListener('click', () => {
    displayValue += "0";
    result.textContent = displayValue;
});
dot.addEventListener('click', () => {
    if (!dotUsed) {
        displayValue += ".";
        result.textContent = displayValue;
        dotUsed = true;
    } else return;
});

function plusEvent() {
    if (!number1) {
        number1 = Number(displayValue);
        operator = '+';
        displayValue = '';
        result.textContent = '';
        dotUsed = false;
    } else if (number1 && !number2) {
        if (operator === '') {
            operator = '+';
        }
        number2 = Number(displayValue);
        let res = operate(operator, number1, number2);
        result.textContent = res;
        displayValue = '';
        number1 = res;
        number2 = NaN;
        operator = "+";
        dotUsed = false;
    }
}

function minusEvent() {
    if (!number1) {
        number1 = Number(displayValue);
        operator = '-';
        displayValue = '';
        result.textContent = '';
        dotUsed = false;
    } else if (number1 && !number2) {
        if (operator === '') {
            operator = '-';
        }
        number2 = Number(displayValue);
        let res = operate(operator, number1, number2);
        result.textContent = res;
        displayValue = '';
        number1 = res;
        number2 = NaN;
        operator = "-";
        dotUsed = false;
    }
}

function multiplyEvent() {
    if (!number1) {
        number1 = Number(displayValue);
        operator = '*';
        displayValue = '';
        result.textContent = '';
        dotUsed = false;
    } else if (number1 && displayValue === '') {
        operator = '*';
        return;
    } else if (number1 && !number2) {
        number2 = Number(displayValue);
        let res = operate(operator, number1, number2);
        result.textContent = res;
        displayValue = '';
        number1 = res;
        number2 = NaN;
        operator = "*";
        dotUsed = false;
    }
}

function divideEvent() {
    if (!number1) {
        number1 = Number(displayValue);
        operator = '/';
        displayValue = '';
        result.textContent = '';
        dotUsed = false;
    } else if (number1 && displayValue === '') {
        operator = '/';
        return;
    } else if (number1 && !number2) {
        number2 = Number(displayValue);
        let res = operate(operator, number1, number2);
        result.textContent = res;
        displayValue = '';
        number1 = res;
        number2 = NaN;
        operator = "/";
        dotUsed = false;
    }
}

function enterEvent() {
    if (!number1) {
        return;
    }
    if (number1 && displayValue === '') {
        return;
    }
    if (number1) {
        number2 = Number(displayValue);
        let res = operate(operator, number1, number2);
        result.textContent = res;
        displayValue = '';
        number1 = res;
        number2 = NaN;
        operator = '';
        dotUsed = false;
    }
}

function delEvent() {
    displayValue = '';
    result.textContent = '0';
    number1 = NaN;
    number2 = NaN;
}

plus.addEventListener('click', () => {
    plusEvent();
})

minus.addEventListener('click', () => {
    minusEvent();
})

star.addEventListener('click', () => {
    multiplyEvent();
})

slash.addEventListener('click', () => {
    divideEvent();
})

enter.addEventListener('click', () => {
    enterEvent();
})

del.addEventListener('click', () => {
    delEvent();
})


document.addEventListener('keydown', e => {
    console.log(e);
    if (e.key === '1') {
        displayValue += "1";
        result.textContent = displayValue;
    }
    if (e.key === '2') {
        displayValue += "2";
        result.textContent = displayValue;
    }
    if (e.key === '3') {
        displayValue += "3";
        result.textContent = displayValue;
    }
    if (e.key === '4') {
        displayValue += "4";
        result.textContent = displayValue;
    }
    if (e.key === '5') {
        displayValue += "5";
        result.textContent = displayValue;
    }
    if (e.key === '6') {
        displayValue += "6";
        result.textContent = displayValue;
    }
    if (e.key === '7') {
        displayValue += "7";
        result.textContent = displayValue;
    }
    if (e.key === '8') {
        displayValue += "8";
        result.textContent = displayValue;
    }
    if (e.key === '9') {
        displayValue += "9";
        result.textContent = displayValue;
    }
    if (e.key === '0') {
        displayValue += "0";
        result.textContent = displayValue;
    }


    if (e.key === 'Backspace') {
        delEvent();
    }
    if (e.key === '-') {
        minusEvent();
    }
    if (e.key === '+' || e.key === '=') {
        plusEvent();
    }
    if (e.key === '*') {
        multiplyEvent();
    }
    if (e.key === '/') {
        divideEvent();
    }
    if (e.key === 'Enter') {
        enterEvent();
    }


    if (e.key === '.') {
        if (!dotUsed) {
            displayValue += ".";
            result.textContent = displayValue;
            dotUsed = true;
        } else return;
    }

})