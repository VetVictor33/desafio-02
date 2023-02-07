const logout = document.querySelector('#logout-icon');
const addButton = document.querySelector('.add-button');
const deletButton = document.querySelectorAll('.table-img');

const formButtons = document.querySelectorAll('form button');

const newModal = document.querySelector('.modal-new-contact');
const newModalAddButton = document.querySelector('.add-new-contact-button');
const newModalCleanButton = document.querySelector('.clean-new-contact-button');

const deletModal = document.querySelector('.modal-delet-contact');


const exitNewModalIcon = document.querySelector('.new-contact-close-icon');
const exitDeletModalIcon = document.querySelector('.delet-contact-close-icon')

const nameInput = document.querySelector('input[name=new-name');
const emailInput = document.querySelector('input[name=new-email');
const telephoneInput = document.querySelector('input[name=new-telephone');

const warnings = document.querySelectorAll('.warning');

let validName = false;
let validEmail = false;
let validTelephone = false;

function changeModal(modal, event, action) {
    event.stopPropagation();
    if (action === 'hide') {
        modal.style.display = 'none';
    } else if (action === 'show') {
        modal.style.display = 'block';
    }
}
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

function cleanNewModalInputs() {
    nameInput.value = '';
    emailInput.value = '';
    telephoneInput.value = '';
}


logout.addEventListener('click', () => {
    window.location.replace('../../index.html');
});


addButton.addEventListener('click', (event) => {
    changeModal(newModal, event, 'show');
});

nameInput.addEventListener('change', (event) => {
    const value = event.target.value;
    const condition = value != '';
    validName = validation(event, warnings[0], condition);
});
emailInput.addEventListener('change', (event) => {
    const value = event.target.value;
    const condition = value.indexOf('@') != -1;
    validEmail = validation(event, warnings[1], condition);
});
telephoneInput.addEventListener('change', (event) => {
    const value = event.target.value;
    const condition = !isNaN(value);
    validTelephone = validation(event, warnings[2], condition);
});

newModalAddButton.addEventListener('click', (event) => {
    event.stopPropagation();
    let error = false;
    const validInputs = [validName, validEmail, validTelephone];
    for (let i = 0; i < validInputs.length; i++) {
        if (!validInputs[i]) {
            warnings[i].style.display = 'block';
            error = true;
        } else {
            changeModal(newModal, event, 'hide')
            cleanNewModalInputs();
            validName = false;
            validEmail = false;
            validTelephone = false;
        }
    }
});
newModalCleanButton.addEventListener('click', (event) => {
    event.stopPropagation();
    cleanNewModalInputs();
    for (let warning of warnings) {
        warning.style.display = 'none';
    }
});


exitNewModalIcon.addEventListener('click', (event) => {
    changeModal(newModal, event, 'hide');
});

for (const icon of deletButton) {
    icon.addEventListener('click', (event) => {
        changeModal(deletModal, event, 'show');
    });
}


exitDeletModalIcon.addEventListener('click', (event) => {
    changeModal(deletModal, event, 'hide')
})

for (const button of formButtons) {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (button.classList.contains('return')) {
            newModal.style.display = 'none';
            deletModal.style.display = 'none';
        }
    })
}