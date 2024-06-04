const display = document.getElementById("display");

document.addEventListener("DOMContentLoaded", function() {
    const selection = document.querySelectorAll("button");
    
    selection.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.id);

            switch (button.id) {
                case "clear":
                    display.textContent = "";
                    break;
                case "zero":
                    if (display.textContent === "" || display.textContent === "0") {
                        display.textContent = 0;
                    } else {
                        display.textContent += 0;
                    }
                    break;
                case "one":
                    display.textContent += 1;
                    break;
                case "two":
                    display.textContent += 2;
                    break;
                case "three":
                    display.textContent += 3;
                    break;
                case "four":
                    display.textContent += 4;
                    break;
                case "five":
                    display.textContent += 5;
                    break;
                case "six":
                    display.textContent += 6;
                    break;
                case "seven":
                    display.textContent += 7;
                    break;
                case "eight":
                    display.textContent += 8;
                    break;
                case "nine":
                    display.textContent += 9;
                    break;
                case "equals":
                    display.textContent = "=";
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
            }

            if (button.id === "clear") {
                display.textContent = "";
            } 
        });
    });

    
});






function operate (num1, num2, sign) {
    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}