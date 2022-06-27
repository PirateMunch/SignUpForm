let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm")

function validatePassword(){
    confirmPassword.setCustomValidity(password.value != confirmPassword.value ? "Passwords do not match" : '');
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;