let currentInput = "0";
let prevInput = "";
let operator = null;

const output = document.getElementById("outputConts");

const updateDisplay = () => {
  output.textContent = currentInput;
};

const handleNumberClick = (num) => {
  if (currentInput === "0") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
};

const handleOperatorClick = (op) => {
  if (operator !== null) {
    return;
  }
  prevInput = currentInput;
  operator = op;
  currentInput = "0";
  updateDisplay();
};

const handleReset = () => {
  currentInput = "0";
  prevInput = "";
  operator = null;
  updateDisplay();
};

const handleDelete = () => {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  updateDisplay();
};

const handleEquals = () => {
  if (operator === null || prevInput === "") {
    return;
  }
  let result;
  const prev = parseFloat(prevInput);
  const current = parseFloat(currentInput);
  
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        result = "Error";
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operator = null;
  prevInput = "";
  updateDisplay();
};

document.getElementById("7").addEventListener("click", () => handleNumberClick("7"));
document.getElementById("8").addEventListener("click", () => handleNumberClick("8"));
document.getElementById("9").addEventListener("click", () => handleNumberClick("9"));
document.getElementById("4").addEventListener("click", () => handleNumberClick("4"));
document.getElementById("5").addEventListener("click", () => handleNumberClick("5"));
document.getElementById("6").addEventListener("click", () => handleNumberClick("6"));
document.getElementById("1").addEventListener("click", () => handleNumberClick("1"));
document.getElementById("2").addEventListener("click", () => handleNumberClick("2"));
document.getElementById("3").addEventListener("click", () => handleNumberClick("3"));
document.getElementById("0").addEventListener("click", () => handleNumberClick("0"));
document.getElementById("dot").addEventListener("click", () => {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
});

document.getElementById("plus").addEventListener("click", () => handleOperatorClick("+"));
document.getElementById("minus").addEventListener("click", () => handleOperatorClick("-"));
document.getElementById("times").addEventListener("click", () => handleOperatorClick("*"));
document.getElementById("divide").addEventListener("click", () => handleOperatorClick("/"));

document.getElementById("delete").addEventListener("click", handleDelete);
document.getElementById("res").addEventListener("click", handleReset);
document.getElementById("=").addEventListener("click", handleEquals);
