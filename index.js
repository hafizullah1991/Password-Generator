const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("password-length");
const errorMessage = document.getElementById("error-message");
const generateButton = document.getElementById("btn");

function validateLength() {
    const length = Number(lengthInput.value);
    if (length < 8) {
        errorMessage.textContent = "Password length should be at least 8 characters.";
        generateButton.disabled = true;
        return false; // indecating validation faild
    } else {
        errorMessage.textContent = "";
        generateButton.disabled = false; // button will be enabled
        return true;
    }
}

function generatePassword() { // calles validateLength to check if the length is valid
    if (!validateLength()) {  // if invalid it will exist.
        return;
    }
    const length = Number(lengthInput.value);
                    // password to be contain all these.
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@!$#&";            // combining all in one variable
    const allChars = upperCaseChars + lowerCaseChars + numberChars + symbolChars;

    let password = "";
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)];

    while (password.length < length) {
        // Continuously adds random characters from all sets until the password reaches the desired length.
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password = shuffle(password);
    passwordBox.value = password;
}

function shuffle(string) {
    const array = string.split(''); //Split the string into an array of characters
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

lengthInput.addEventListener('input', validateLength);
//  call validateLength every time the input value changes.