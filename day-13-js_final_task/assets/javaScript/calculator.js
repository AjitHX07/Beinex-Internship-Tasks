const inputField = document.querySelector('.input');
const outputField = document.querySelector('.output');
const historyDisplay = document.createElement('div'); // History display element
historyDisplay.classList.add('history-display'); // Add a class for easy styling

document.querySelector('.display').appendChild(historyDisplay); // Adding history display to main

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const btnId = event.target.id;
        handleButtonClick(btnId);
    });
});

function handleButtonClick(btnId) {
    switch (btnId) {
        // Numbers
        case 'btn-0': case 'btn-1': case 'btn-2': case 'btn-3': case 'btn-4':
        case 'btn-5': case 'btn-6': case 'btn-7': case 'btn-8': case 'btn-9':
            inputField.value += btnId.replace('btn-', '');
            break;
        case 'btn-00':
            inputField.value += '00';
            break;

        // Add, Subtract, Multiply, Divide Operators
        case 'btn-add': case 'btn-subtract': case 'btn-mul': case 'btn-divide':
            inputField.value += getOperatorSymbol(btnId);
            break;

        // Decimal Point
        case 'btn-dot':
            if (!inputField.value.includes('.')) inputField.value += '.';
            break;

        // Equals button
        case 'equal-btn':
            calculateResult();
            break;

        // Reset and Delete buttons
        case 'btn-reset':
            resetCalculator();
            break;
        case 'btn-del':
            deleteLastInput();
            break;

        // Square Root, Square, Cube, Percentage, History
        case 'btn-sqrt':
            calculateSquareRoot();
            break;
        case 'btn-square':
            calculateSquare();
            break;
        case 'cube-btn':
            calculateCube();
            break;
        case 'btn-percent':
            calculatePercentage();
            break;
        case 'history-btn':
            toggleHistoryDisplay();
            break;
    }
}

// Get operator symbol for mathematical operations
function getOperatorSymbol(btnId) {
    switch (btnId) {
        case 'btn-add': return '+';
        case 'btn-subtract': return '-';
        case 'btn-mul': return '*';
        case 'btn-divide': return '/';
    }
}

// Calculation functions
function calculateResult() {
    if (!inputField.value) {
        outputField.value = '0';
        return;
    }
    try {
        outputField.value = eval(inputField.value);
        addToHistory(`${inputField.value} = ${outputField.value}`);
    } catch {
        outputField.value = 'Error';
    }
}
// main calc functions (cube, squrt,etc)
function calculateSquareRoot() {
    outputField.value = Math.sqrt(parseFloat(inputField.value) || 0);
    addToHistory(`√(${inputField.value}) = ${outputField.value}`);
}

function calculateSquare() {
    outputField.value = Math.pow(parseFloat(inputField.value) || 0, 2);
    addToHistory(`(${inputField.value})² = ${outputField.value}`);
}

function calculateCube() {
    outputField.value = Math.pow(parseFloat(inputField.value) || 0, 3);
    addToHistory(`(${inputField.value})³ = ${outputField.value}`);
}

function calculatePercentage() {
    outputField.value = parseFloat(inputField.value || 0) / 100;
    addToHistory(`(${inputField.value})% = ${outputField.value}`);
}

// History Management
const history = [];
function addToHistory(entry) {
    history.push(entry);
    updateHistoryDisplay();
}

function toggleHistoryDisplay() {
    historyDisplay.classList.toggle('visible');
}

function updateHistoryDisplay() {
    historyDisplay.innerHTML = `<h3>History</h3><ul>${history.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

// Clear, Delete Last Input, and Reset
function resetCalculator() {
    inputField.value = '';
    outputField.value = '';
}

function deleteLastInput() {
    inputField.value = inputField.value.slice(0, -1);
}
