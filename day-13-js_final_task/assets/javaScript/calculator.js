// Select the main input and output fields in the display
const inputField = document.querySelector('.input');
const outputField = document.querySelector('.output');

// Create the history display element and add a class for styling
const historyDisplay = document.createElement('div');
historyDisplay.classList.add('history-display');

document.querySelector('.display').appendChild(historyDisplay);

// Select all buttons and add event listeners to handle clicks
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const btnId = event.target.id;
        handleButtonClick(btnId);
    });
});

// Function to handle different button actions
function handleButtonClick(btnId) {
    switch (btnId) {
        // Number buttons
        case 'btn-0': case 'btn-1': case 'btn-2': case 'btn-3': case 'btn-4':
        case 'btn-5': case 'btn-6': case 'btn-7': case 'btn-8': case 'btn-9':
            inputField.value += btnId.replace('btn-', '');
            break;
        case 'btn-00':
            inputField.value += '00';
            break;

        // Basic math operators
        case 'btn-add': case 'btn-subtract': case 'btn-mul': case 'btn-divide':
            inputField.value += getOperatorSymbol(btnId);
            break;

        // Decimal point (avoids adding multiple dots)
        case 'btn-dot':
            if (!inputField.value.includes('.')) inputField.value += '.';
            break;

        // Equal button to calculate result
        case 'equal-btn':
            calculateResult();
            break;

        // Reset and delete buttons
        case 'btn-reset':
            resetCalculator();
            break;
        case 'btn-del':
            deleteLastInput();
            break;

        // Advanced math functions
        case 'btn-sqrt':
            calculateSquareRoot();
            break;
        //square
        case 'btn-square':
            calculateSquare();
            break;


        //cube
        case 'cube-btn':
            calculateCube();
            break;
        //percentile
        case 'btn-percent':
            calculatePercentage();
            break;

        // History button to toggle visibility
        case 'history-btn':
            toggleHistoryDisplay();
            break;
    }
}

// Function to retrieve operator symbol based on button ID
function getOperatorSymbol(btnId) {
    switch (btnId) {
        case 'btn-add': return '+';
        case 'btn-subtract': return '-';
        case 'btn-mul': return '*';
        case 'btn-divide': return '/';
    }
}

// Calculate and display result, handling empty input and duplicate results
function calculateResult() {
    const currentInput = inputField.value;
    if (!currentInput) {
        outputField.value = '0';
        return;
    }



    // Check if the result is already in the history to avoid duplicates
    if (history.length > 0 && history[history.length - 1].startsWith(currentInput + ' =')) {
        return;
    }


    try {
        outputField.value = eval(currentInput);
        addToHistory(`${currentInput} = ${outputField.value}`);
    } catch {
        outputField.value = 'Error';
    }
}

// Advanced math functions (square root, square, cube, percentage)
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



// History array to store calculation entries
const history = [];



// Add new entry to history and update display
function addToHistory(entry) {
    history.push(entry);
    updateHistoryDisplay();
}


// Toggle history display visibility
function toggleHistoryDisplay() {
    historyDisplay.classList.toggle('visible');
}



// Update history display and add Clear History button
function updateHistoryDisplay() {
    historyDisplay.innerHTML = `<h3>History</h3><ul>${history.map(item => `<li>${item}</li>`).join('')}</ul>`;


    // Create the Clear History button if it doesn't exist yet
    if (!document.querySelector('.clear-history-btn')) {
        const clearHistoryButton = document.createElement('button');
        clearHistoryButton.classList.add('clear-history-btn');
        //styling the btn-clear
        clearHistoryButton.textContent = 'Clear';
        clearHistoryButton.style.width = "2.6rem"
        clearHistoryButton.style.height = "1.5rem"
        clearHistoryButton.style.padding = "2px"
        clearHistoryButton.style.position = "relative"
        clearHistoryButton.style.bottom = "1.5rem"
        clearHistoryButton.style.left = "7rem"
        clearHistoryButton.style.backgroundColor = "#ff7c7c"


        clearHistory

        // Clear history on button click
        clearHistoryButton.addEventListener('click', clearHistory);

        // Append the button to the history display
        historyDisplay.appendChild(clearHistoryButton);
    }
}

// Function to clear history and refresh the display
function clearHistory() {
    history.length = 0;
    updateHistoryDisplay();
}

// Reset calculator display fields
function resetCalculator() {
    inputField.value = '';
    outputField.value = '';
}

// Delete the last character in the input field
function deleteLastInput() {
    inputField.value = inputField.value.slice(0, -1);
}
