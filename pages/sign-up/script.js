const signupButton = document.querySelector('.signup-button');
const cancelButton = document.querySelector('.cancel-button');

const nameInput = document.querySelector('input[name=name]');
const emailInput = document.querySelector('input[name=email]');
const passwordInput = document.querySelector('input[name=password]');

const warnings = document.querySelectorAll('.warning');

let validName = false;
let validEmail = false;
let validPassword = false;

function validation(event, warning, condition) {
    event.stopPropagation();
    if (condition) {
        warning.style.display = 'none';
        return true;
    } else {
        warning.style.display = 'block';
        return false;
    }
}

nameInput.addEventListener('change', (event) => {
    const value = event.target.value;
    const condition = value != ''
    validName = validation(event, warnings[0], condition);
})
emailInput.addEventListener('change', (event) => {
    const value = event.target.value;
    const condition = value.indexOf('@') != -1;
    validEmail = validation(event, warnings[1], condition)
})
passwordInput.addEventListener('change', (event) => {
    const value = event.target.value;
    const condition = value.length >= 8 && value.length <= 16;
    validPassword = validation(event, warnings[2], condition)
})

signupButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const validInputs = [validName, validEmail, validPassword];

    let error = false;
    for (let i = 0; i < validInputs.length; i++) {
        if (!validInputs[i]) {
            warnings[i].style.display = 'block';
            error = true;
        }
    }

    if (!error) {
        window.location.replace('../main/index.html')
    }
})

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.location.replace('../../index.html')

})