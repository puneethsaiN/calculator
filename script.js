let expString = "0";
let num1, num2;
let op;
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

function updateDisplay(text) {
    display.textContent = text;
}

let numButtons = document.querySelectorAll(".num-btn");
numButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(expString.length > 14) return;
        if(expString == "0") expString = "";
        expString += btn.textContent;
        updateDisplay(expString);
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
    updateDisplay(expString);
});

let plusButton = document.querySelector(".plus-btn");
plusButton.addEventListener("click", (e) => {
    if(!num1) {
        num1 = parseFloat(expString);
        expString = "";
        op = "+";
    }
    else if(!num2) {
        num2 = parseFloat(expString);
        let res = evalulate(num1, num2, op);
        expString = "";
        updateDisplay(res);
        //reset nums
        num1 = res;
        num2 = undefined;
    }
});

let minButton = document.querySelector(".min-btn");
minButton.addEventListener("click", (e) => {
    if(!num1) {
        num1 = parseFloat(expString);
        expString = "";
        op = '-';
    }
    else if(!num2) {
        num2 = parseFloat(expString);
        let res = evalulate(num1, num2, op);
        expString = "";
        updateDisplay(res);
        //reset nums
        num1 = res;
        num2 = undefined;
    }
});

let eqlButton = document.querySelector(".eql-btn");
eqlButton.addEventListener("click", () => {
    console.log(num1, num2, op);
    num2 = parseFloat(expString);
    let res = evalulate(num1, num2, op);
    updateDisplay(res);
    expString = "";
    num1 = res;
    num2 = undefined;
    op = undefined;
});
