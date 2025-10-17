const display = document.getElementById('display');
    let currentOperand = '';
    let previousOperand = '';
    let operator = null;

    function appendNumber(number) {
      if (currentOperand.length >= 12) return;
      if (number === '0' && currentOperand === '0') return;
      currentOperand = currentOperand.toString() + number.toString();
      updateDisplay();
    }

    function chooseOperator(op) {
      if (currentOperand === '') return;
      if (previousOperand !== '') compute();
      operator = op;
      previousOperand = currentOperand;
      currentOperand = '';
    }

    function compute() {
      let computation;
      const prev = parseFloat(previousOperand);
      const curr = parseFloat(currentOperand);
      if (isNaN(prev) || isNaN(curr)) return;

      switch (operator) {
        case '+':
          computation = prev + curr;
          break;
        case '-':
          computation = prev - curr;
          break;
        case '*':
          computation = prev * curr;
          break;
        case '/':
          computation = curr === 0 ? 'Error' : prev / curr;
          break;
        default:
          return;
      }
      currentOperand = computation.toString();
      operator = null;
      previousOperand = '';
      updateDisplay();
    }

    function clearDisplay() {
      currentOperand = '';
      previousOperand = '';
      operator = null;
      updateDisplay();
    }

    function updateDisplay() {
      display.textContent = currentOperand || previousOperand || '0';
    }