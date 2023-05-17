let num1 = '';
let num2 = '';
let operation = '';
let result = '';


const lastCalc = document.querySelector('#last-calc');
const inputResult = document.querySelector('#result-display span');
const btnReset = document.querySelector('.reset');
const btnClear = document.querySelector('.clear');
const btnPercent = document.querySelector('#percent');
const btnDivide = document.querySelector('#divide');
const btnMultiply = document.querySelector('#multiply');
const btnMinus = document.querySelector('#minus');
const btnPlus = document.querySelector('#plus');
const btnPlusMinus = document.querySelector('#plusMinus');
const btnPoint = document.querySelector('#point');
const btnEqual = document.querySelector('.result');

const btnNumbers = document.querySelectorAll('#keyboard button:not(.reset):not(.operations):not(.result):not(.clear)');

btnReset.addEventListener('click', () => {
  num1 = '';
  num2 = '';
  operation = '';
  result = '';
  inputResult.textContent = '0';
  lastCalc.textContent = '';
});

btnClear.addEventListener('click', () => {
  if (inputResult.textContent != '0') {
    inputResult.textContent = '0'
  } 
 
});

btnPercent.addEventListener('click', () => {
  num1 = Number(inputResult.textContent) / 100;
  inputResult.textContent = num1;
});

btnDivide.addEventListener('click', () => {
  num1 = Number(inputResult.textContent);
  operation = '÷';
  lastCalc.textContent = `${num1} ${operation}`;
  inputResult.textContent = '0';
});

btnMultiply.addEventListener('click', () => {
  num1 = Number(inputResult.textContent);
  operation = 'x';
  lastCalc.textContent = `${num1} ${operation}`;
  inputResult.textContent = '0';
});

btnMinus.addEventListener('click', () => {
  num1 = Number(inputResult.textContent);
  operation = '-';
  lastCalc.textContent = `${num1} ${operation}`;
  inputResult.textContent = '0';
});

btnPlus.addEventListener('click', () => {
  num1 = Number(inputResult.textContent);
  operation = '+';
  lastCalc.textContent = `${num1} ${operation}`;
  inputResult.textContent = '0';
});

btnPlusMinus.addEventListener('click', () => {
  inputResult.textContent = Number(inputResult.textContent) * -1;
});

btnPoint.addEventListener('click', () => {
  if (!inputResult.textContent.includes(',')) {
    inputResult.textContent = parseFloat(inputResult.textContent);
  }
});

btnEqual.addEventListener('click', () => {
  num2 = Number(inputResult.textContent);
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    case '÷':
      result = num1 / num2;
      break;
    default:
      result = '';
  }
  inputResult.textContent = result;
  lastCalc.textContent = `${num1} ${operation} ${num2}`;
  
});

btnNumbers.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (result !== '') {
      num1 = '';
      num2 = '';
      operation = '';
      result = '';
      lastCalc.textContent = '';
      inputResult.textContent = '';
    }

    if (inputResult.textContent === '0') {
      inputResult.textContent = '';
    }
    inputResult.textContent += btn.textContent;
  });
});
