let number1;
let number2;
let operation;




function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
} 

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    const mathOperations = {
        "add": add(num1, num2),
        "subtract": subtract(num1, num2),
        "multiply": multiply(num1, num2),
        "divide": divide(num1, num2)
    }

    return mathOperations[operator];
}

const calculatorElement = document.querySelector("#calculator");
const displayElement = document.querySelector("#display-h2");


calculatorElement.addEventListener("click", (event) => {
    let target = event.target;

    let calculatorOperationsObj = {
        "MC": "",
        "%": "%",
        "+": "+",
        "7": 7,
        "8": 8,
        "9": 9
    };



    displayElement.textContent = calculatorOperationsObj[target.textContent];
});




console.log(operate("subtract", 2, 2));




