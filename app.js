let num1 = null;
let num2 = null;
let operator = null;
let screen = document.getElementById("screen");

function clearScreen() {
  screen.value = "0";
  num1 = null;
  num2 = null;
  operator = null;
}

function appendNumber(number) {
  if (screen.value === "0") {
    screen.value = number;
  } else {
    screen.value += number;
  }
}

function appendDecimal() {
  if (!screen.value.includes(".")) {
    screen.value += ".";
  }
}

function setOperator(op) {
  num1 = parseFloat(screen.value);

  operator = op;
  screen.value = "0";
}

function calculate() {
  num2 = parseFloat(screen.value);
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      result = 0;
  }
  screen.value=result
}