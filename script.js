const display = document.getElementById("display");
const historyContainer = document.getElementById("history-list");

document.addEventListener("DOMContentLoaded", function() {
    const selection = document.querySelectorAll("button");
    let numOne = "";
    let numTwo = "";
    let sign;
    let isSign = false;
    let equals = false;

    selection.forEach((button) => {
        button.addEventListener("click", () => {

            if (["multiply", "divide", "add", "subtract", "equals", "decimal"].includes(button.id)) {
                
            } else if (sign === undefined) {
                numOne += button.id;
                console.log(numOne);
            } else {
                numTwo += button.id;
                console.log(numTwo);
            }

            if (["multiply", "divide", "add", "subtract"].includes(button.id)) {
                sign = button.id;
                isSign = true;
                console.log(sign);
            }

            switch (button.id) {
                case "clear":
                    display.textContent = "";
                    numOne = "";
                    numTwo = "";
                    sign = undefined;
                    break;
                case "0":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "0";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "0";
                    }
                    break;
                case "1":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "1";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "1";
                    }
                    break;
                case "2":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "2";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "2";
                    }
                    break;
                case "3":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "3";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "3";
                    }
                    break;
                case "4":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "4";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "4";
                    }
                    break;
                case "5":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "5";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "5";
                    }
                    break;
                case "6":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "6";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "6";
                    }
                    break;
                case "7":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "7";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "7";
                    }
                    break;
                case "8":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "8";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "8";
                    }
                    break;
                case "9":
                    if (display.textContent === "" || display.textContent === "0" || equals === true || isSign === true) {
                        display.textContent = "9";
                        isSign = false;
                        equals = false;
                    } else {
                        display.textContent += "9";
                    }
                    break;
                case "multiply":
                    display.textContent = "X";
                    break;
                case "divide":
                    display.textContent = "/";
                    break;
                case "add":
                    display.textContent = "+";
                    break;
                case "subtract":
                    display.textContent = "-";
                    break;
                // case "decimal":
                //     display.textContent += ".";
                //     break;
                case "equals":
                    equals = true;
                    display.textContent = operate(numOne, numTwo, sign);
                    history(numOne, numTwo, sign);
                    numOne = "";
                    numTwo = "";
                    sign = undefined;
                    break;                                                              
            }

            if (button.id === "clear") {
                display.textContent = "";
                numOne = "";
                numTwo = "";
                sign = undefined;
            } 
        });
    });
});

function history(num1, num2, sign) {
    switch (sign) {
        case 'add':
            sign = " + ";
            break;
        case 'subtract':
            sign = " - ";
            break;
        case 'multiply':
            sign = " x ";
            break;
        case 'divide':
            sign = " / ";
            break;
    }

    const newHistory = document.createElement("p");
    newHistory.classList.add("history-item");
    newHistory.textContent = num1 + sign + num2 + " = " + result;
    historyContainer.insertBefore(newHistory, historyContainer.firstChild);
}

function operate (num1, num2, sign) {
    numOne = parseInt(num1);
    numTwo = parseInt(num2);

    switch (sign) {
        case 'add':
            result = numOne + numTwo;
            break;
        case 'subtract':
            result = numOne - numTwo;
            break;
        case 'multiply':
            result = numOne * numTwo;
            break;
        case 'divide':
            result = numOne / numTwo;
            break;
    }
    console.log(result);
    return result;
}