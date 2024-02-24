const display = document.getElementById('display');

    function appendToDisplay(value) {
      display.innerText += value;
    }

    function clearDisplay() {
      display.innerText = '';
    }

    function calculate() {
      try {
        const result = eval(display.innerText);
        if (result === Infinity || isNaN(result)) {
          display.innerText = 'N/A';
        } else {
          display.innerText = result;
        }
      } catch (error) {
        display.innerText = 'Error';
      }
    }

    function calculatePercentage() {
      const currentValue = parseFloat(display.innerText);
      if (!isNaN(currentValue)) {
        display.innerText = (currentValue / 100).toString();
      }
    }

    document.addEventListener('keydown', function(event) {
      const key = event.key;
      const allowedKeys = /[0-9+\-*/.=]|Backspace|Enter|Escape/;
      if (allowedKeys.test(key)) {
        if (key === 'Enter') {
          calculate();
        } else if (key === 'Backspace') {
          display.innerText = display.innerText.slice(0, -1);
        } else if (key === 'Escape') {
          clearDisplay();
        } else {
          appendToDisplay(key);
        }
      }
    });
