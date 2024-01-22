let display = document.getElementById('display');

    function appendToDisplay(value) {
        const lastChar = display.innerHTML.slice(-1);

        if (value === '00' && display.innerHTML === '0') {
            // Prevent leading double zeros
            return;
        }

        if (lastChar === '0' && (/[+\-*/]/).test(value)) {
            // Prevent leading arithmetic expressions
            return;
        }

        if ((/[+\-*/]/).test(lastChar) && (/[+\-*/]/).test(value)) {
            // Replace existing operator with the new one
            display.innerHTML = display.innerHTML.slice(0, -1) + value;
            return;
        }

        display.innerHTML += value;
    }

    function clearDisplay() {
        display.innerHTML = '';
    }

    function backspace() {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }

    function calculateResult() {
        try {
            const result = Function('"use strict";return (' + display.innerHTML + ')')();
            display.innerHTML = result;
        } catch (error) {
            display.innerHTML = 'Error';
        }
    }