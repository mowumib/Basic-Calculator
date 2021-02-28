// Selectors
const buttons = document.getElementsByClassName("number");
const screen = document.getElementById("valueholder");
const operators = document.getElementsByClassName("operator");
const clearbtn = document.getElementById("clear");
const decimal = document.getElementById("decimal");
const equalsTo = document.getElementById("equal");

let currentValue = "0";
let firstOperand;
let secondOperand;
let evalArray = [];

let screenValue = (e) => {
    let value = e.target.innerText;
    // currentValue = '';
    if (currentValue === "0") {
        currentValue = "";
    }
    if (currentValue === "+" || currentValue === "-" || currentValue === "*" || currentValue === "÷") {
        currentValue = "";
    }
    currentValue += value;
    screen.value = currentValue;
    // console.log(currentValue);
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", screenValue);
}

// clearbtn action
clearbtn.onclick = () => {
    currentValue = "0";
    firstOperand = undefined;
    evalArray = [];
    screen.value = currentValue;
};

// decimal action
decimal.onclick = () => {
    if (!currentValue.includes(".")) {
        currentValue += ".";
    }
    screen.value = currentValue;
};

let mathOperation = (e) => {
    let operator = e.target.innerText;
    let op;
    switch (operator) {
        case "+":
            firstOperand = currentValue;
            op = operator;
            currentValue = "+";
            screen.value = currentValue;
            evalArray.push(firstOperand);
            if (!evalArray.includes("+")) {
                evalArray.push("+");
            } else {
                evalArray.pop("+");
            }
            break;
        case "-":
            firstOperand = currentValue;
            currentValue = "-";
            screen.value = currentValue;
            evalArray.push(firstOperand);
            if (!evalArray.includes("-")) {
                evalArray.push("-");
            } else {
                evalArray.pop("-");
            }
            break;
        case "*":
            firstOperand = currentValue;
            currentValue = "*";
            screen.value = currentValue;
            evalArray.push(firstOperand);
            if (!evalArray.includes("*")) {
                evalArray.push("*");
            } else {
                evalArray.pop("*");
            }
            break;
        case "÷":
            firstOperand = currentValue;
            currentValue = "÷";
            screen.value = currentValue;
            evalArray.push(firstOperand);
            if (!evalArray.includes("/")) {
                evalArray.push("/");
            } else {
                evalArray.pop("/");
            }
            
            break;
        case "=":
            secondOperand = currentValue;
            evalArray.push(secondOperand);
            let evaluation = eval(evalArray.join(""));
            currentValue = evaluation + "";
            screen.value = currentValue;
            // console.log(evalArray);
            evalArray = [];
            break;
        default:
            break;
    }
};




// let calculate = (fOP, oP, sOP) =>{
//     if(oP === '+'){
        
//         let cal = parseInt(fOP + sOP);
//         currentValue = cal.toString();
//         screen.value = currentValue;
//     }

// }

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", mathOperation);
}

