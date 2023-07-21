// 숫자 버튼 클릭 시 입력 받기
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
const display = document.querySelector('.calculator__display--for-advanced');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

decimalButton.addEventListener('click', () => {
    const lastCharacter = display.textContent.slice(-1);
    if (lastCharacter !== '.') {
        display.textContent += decimalButton.textContent;
    }
});

// 연산자 버튼 클릭 시 연산 수행
const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

// 식 초기화
const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    display.textContent = '';
});

// 등호(=) 버튼 클릭 시 결과 계산
const equalButton = document.querySelector('.double');

equalButton.addEventListener('click', () => {
    const expression = display.textContent;

    try {
        const result = evaluateExpression(expression);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
});

// 수식 계산 함수
function evaluateExpression(expression) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    const tokens = expression.split(/(\+|\-|\*|\/)/); // 숫자와 연산자를 분리하여 배열로 생성

    // 연산자 우선순위에 따라 계산
    let currentOperator = '';
    let currentNumber = '';
    let result = 0;

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i].trim();

        if (token === '+' || token === '-' || token === '*' || token === '/') {
            currentOperator = token;
        } else if (token === '.') {
            currentNumber += token;
        } else {
            if (currentNumber !== '') {
                const number = parseFloat(currentNumber);

                if (isNaN(number)) {
                    throw new Error('Invalid expression');
                }

                if (currentOperator === '') {
                    result = number;
                } else {
                    result = operators[currentOperator](result, number);
                }

                currentNumber = '';
            }

            currentNumber += token;

            if (tokens[i + 1] === '.' || tokens[i + 1] === undefined || isNaN(parseFloat(tokens[i + 1]))) {
                const number = parseFloat(currentNumber);

                if (isNaN(number)) {
                    throw new Error('Invalid expression');
                }

                if (currentOperator === '') {
                    result = number;
                } else {
                    result = operators[currentOperator](result, number);
                }

                currentNumber = '';
            }
        }
    }

    result = result.toFixed(2);
    return result;
}