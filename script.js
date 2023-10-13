let displayValue = "";
let currentValue = "";
let currentOperator = "";

function appendNumber(number) {
    if (displayValue === "0") {
        displayValue = number.toString();
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentValue === "") {
        currentValue = displayValue;
        displayValue = "0";
    } else {
        calculateResult();
    }
    currentOperator = operator;
}

function calculateResult() {
    if (currentValue !== "" && displayValue !== "") {
        const num1 = parseFloat(currentValue);
        const num2 = parseFloat(displayValue);
        switch (currentOperator) {
            case '+':
                displayValue = (num1 + num2).toString();
                break;
            case '-':
                displayValue = (num1 - num2).toString();
                break;
            case '*':
                displayValue = (num1 * num2).toString();
                break;
            case '/':
                if (num2 !== 0) {
                    displayValue = (num1 / num2).toString();
                } else {
                    displayValue = "Error";
                }
                break;
        }
        currentValue = "";
        currentOperator = "";
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "0";
    currentValue = "";
    currentOperator = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").innerText = displayValue;
}

updateDisplay();