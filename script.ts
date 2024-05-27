type CheckPasswordResult = {
    message: string;
    color: string;
}

const checkPass = (pass: string ): CheckPasswordResult => {
    const letters = /[a-z]/i;
    const numbers = /[0-9]/;
    const special = /[!@#$%^&*()]/;

    if (pass.length >= 10 && pass.match(letters) && pass.match(special) && pass.match(numbers)) {
        return {
            message: 'You have strong password',
            color: 'lime'
        };
    } else {
        return {
            message: 'Your password is weak',
            color: 'tomato',
        }

    }
}

const fillParagraph = (paragraph: HTMLParagraphElement, password: string): void => {
    if (password !== '') {
        const checkPasswordResult = checkPass(password)
        paragraph.textContent = checkPasswordResult.message;
        paragraph.style.color = checkPasswordResult.color;

    } else  {
        paragraph.textContent = 'Enter password'
    }
    return;
}

const onKeyDown = () =>  {
    const pass: HTMLInputElement | null = document.querySelector('#password');
    const p: HTMLParagraphElement | null = document.querySelector('.passinfo');

    if(p && pass){
        pass.addEventListener('keydown', () => fillParagraph(p, pass.value))
    }
}

onKeyDown()

