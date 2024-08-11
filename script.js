function clearDisplay() {
    document.getElementById('display').textContent = '';
}
function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Handle closing of scientific functions
    if (value === ')') {
        const openCount = (display.textContent.match(/\(/g) || []).length;
        const closeCount = (display.textContent.match(/\)/g) || []).length;
        if (openCount > closeCount) {
            display.textContent += value;
        }
    } else {
        display.textContent += value;
    }
}
function calculateResult() {
    try {
        const display = document.getElementById('display');
        // Replace scientific function names with JS equivalents
        let expression = display.textContent
            .replace(/Math.sqrt\(/g, 'Math.sqrt(')
            .replace(/Math.pow\(/g, 'Math.pow(')
            .replace(/Math.sin\(/g, 'Math.sin(')
            .replace(/Math.cos\(/g, 'Math.cos(')
            .replace(/Math.tan\(/g, 'Math.tan(')
            .replace(/π/g, Math.PI);

        // Evaluate the expression
        const result = eval(expression);
        display.textContent = result;
    } catch (e) {
        display.textContent = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents default behavior like form submission
        calculateResult(); // Calls the function to perform the calculation
    }
});