var checkPass = function (pass) {
    var letters = /[a-z]/i;
    var numbers = /[0-9]/;
    var special = /[!@#$%^&*()]/;
    if (pass.length >= 10 && pass.match(letters) && pass.match(special) && pass.match(numbers)) {
        return {
            message: 'You have strong password',
            color: 'lime'
        };
    }
    else {
        return {
            message: 'Your password is weak',
            color: 'tomato',
        };
    }
};

var fillParagraph = function (paragraph, password) {
    if (password !== '') {
        var checkPasswordResult = checkPass(password);
        paragraph.textContent = checkPasswordResult.message;
        paragraph.style.color = checkPasswordResult.color;
    }
    else {
        paragraph.textContent = 'Enter password';
    }
    return;
};
var onKeyDown = function () {
    var pass = document.querySelector('#password');
    var p = document.querySelector('.passinfo');
    if (p && pass) {
        pass.addEventListener('keydown', function () { return fillParagraph(p, pass.value); });
    }
};

onKeyDown();
