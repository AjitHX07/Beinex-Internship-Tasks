// const name = document.getElementById('name')
const password = document.getElementById('password').value

const result = document.getElementById('result')

let arrPasword = []

arrPasword = password.split('')


function validatePassword(password) {
    if (password.length < 8) {
        throw new Error("Your password is weak (less than 8 characters)");
    }
    if (!/\d/.test(password)) {
        throw new Error("Your password must contain at least one number");
    }
    return "Password is valid";
}

function validator(event) {
    event.preventDefault(); // Prevent form submission
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    try {
        const validationMessage = validatePassword(password);
        result.innerText = validationMessage; // Display success message
        result.style.color = "green";
    } catch (error) {
        result.innerText = error.message; // Display error message
        result.style.color = "red";
    }
}
