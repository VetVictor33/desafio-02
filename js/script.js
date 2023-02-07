const button = document.querySelector('.login-button');

const emailInput = document.querySelector('input[name=email');
const passwordInput = document.querySelector('input[name=password');

const warnings = document.querySelectorAll('.warning');

let error = true;

emailInput.addEventListener('change', (event) => {
    event.stopPropagation();
    const value = event.target.value
    if (value.indexOf('@') === -1) {
        warnings[0].style.display = 'block';
    } else {
        warnings[0].style.display = 'none';
    }

})

passwordInput.addEventListener('change', (event) => {
    event.stopPropagation();
    const value = event.target.value
    if (value === '') {
        warnings[1].style.display = 'block';
    } else {
        warnings[1].style.display = 'none';
        error = false;
    }

})



button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    for (const warning of warnings) {
        if (warning.style.display === 'block') {
            error = true;
        }
    }

    if (!error && !passwordInput.value == '') {
        window.location.replace('./pages/main/index.html')
    } else {
        if (emailInput.value == '') {
            warnings[0].style.display = 'block';
        }
        if (passwordInput.value == '') {
            warnings[1].style.display = 'block';
        }
    }
})