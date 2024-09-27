let expString = "0";
let num1, num2;
const display = document.querySelector(".display-text");

function evalulate(num1, num2, op) {
    switch(op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
    return "Error";
}

let numButtons = document.querySelectorAll(".num-btn");
numButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(expString.length > 14) return;
        if(expString == "0") expString = "";
        expString += btn.textContent;
        display.textContent = expString;
    });
});

let ACButton = document.querySelector(".AC-btn");
ACButton.addEventListener("click", (e) => {
    expString = "0";
    display.textContent = expString;
    num1 = undefined;
    num2 = undefined;
});

let undoButton = document.querySelector(".undo-btn");
undoButton.addEventListener("click", (e) => {
    if(expString == 0) return;
    expString = expString.slice(0, -1);
    display.textContent = expString;
});
