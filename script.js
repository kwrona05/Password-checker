const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPass = () => {
if (pass.value.length >= 10 && pass.value.match(letters) && pass.value.match(special) && pass.value.match(numbers)) {
    p.textContent = 'You have strong password'
    p.style.color = 'lime'
} else {
    p.textContent = 'Your password is weak'
    p.style.color = 'tomato'
}
}

const checkFill = () => {
    if (pass.value !== '') {
        checkPass()
    } else {
        p.textContent = 'Enter password'
    }
}

pass.addEventListener('keydown', checkFill)