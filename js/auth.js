function imitationLogin(){
    const popup = document.querySelector('#popup');
    const input = document.querySelector('input[type=submit]');

    const inputEmail = document.querySelector('input[name=email]');

    popup.style.color = 'var(--color-error-500)';
    if (input.value === 'Sing In') {
        const inputPassword = document.querySelector('input[name=password]');
        popup.textContent = 'Incorrect password. Try again or click on the link below to reset it.';
        popup.style.background = 'var(--color-error-200)';
        if (!inputEmail.value && !inputPassword.value) {
            popup.textContent = 'Please fill out this form.';
        }
    }
    if (input.value === 'Sing Up') {
        const inputUsername = document.querySelector('input[name=username]');
        const inputPassword = document.querySelector('input[name=password]');
        popup.textContent = 'This account already exist.';
        popup.style.background = 'var(--color-error-200)';
        if (!inputUsername.value && !inputEmail.value && !inputPassword.value) {
            popup.textContent = 'Please fill out this form.';
        }
    }
    if (input.value === 'Continue') {
        popup.textContent = 'Email succsesfully sent.';
        popup.style.color = 'var(--color-success-500)';
        popup.style.background = 'var(--color-primary)';
        if (!inputEmail.value) {
            popup.style.color = 'var(--color-error-500)';
            popup.style.background = 'var(--color-error-200)';
            popup.textContent = 'Please enter email.';
        }
    }
}